import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const SHEETS = 'ppg-artikel'
const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`

type dataKarya = {
  uuid: string
  peserta: string
  judul_karya: string
  deskripsi_karya: string
  src_obj: string
}

const toProperCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  )
}

export default async function PublikasiArtikelPage() {
  const content: dataKarya[] = []
  await fetch(DATA_ENDPOINT)
    .then((res) => res.json())
    .then((json) => {
      const data = json.values
      const uuid = data[1]
      const peserta = data[2]
      const judul_karya = data[3]
      const deskripsi_karya = data[4]
      const src_obj = data[5]

      for (let i = 1; i < data[0].length; i++) {
        const item = {
          uuid: uuid[i],
          peserta: peserta[i],
          judul_karya: judul_karya[i],
          deskripsi_karya: deskripsi_karya[i],
          src_obj: src_obj[i],
        }
        content.push(item)
      }
    })

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-center text-lg font-bold text-blue-900 xl:text-4xl'>
        Artikel Mahasiswa PPG
      </h1>
      <section className='grid grid-cols-1 gap-8 py-12 pb-24 xl:grid-cols-4'>
        {content.map((item) => (
          <a
            href={item.src_obj}
            key={item.uuid}
            className='hover:cursor-pointer'
          >
            <Card>
              <CardHeader>
                <CardTitle className='line-clamp-3'>
                  {toProperCase(item.judul_karya)}
                </CardTitle>
                <CardDescription>{item.peserta}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </section>
    </main>
  )
}
