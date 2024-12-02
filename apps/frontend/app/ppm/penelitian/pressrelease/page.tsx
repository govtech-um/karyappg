import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const SHEETS = 'ppm-aset'
const DATA_ENDPOINT = `${process.env.SPREADSHEET_ENDPOINT}/${SHEETS}?key=${process.env.GAPI_SPREADSHEETS}&majorDimension=COLUMNS`

type dataKarya = {
  uuid: string
  author: string
  title: string
  src_obj: string
  ppm_category: string
  ppm_output_category: string
  ppm_schema: string
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
      const uuid = data[0]
      const author = data[1]
      const title = data[2]
      const src_obj = data[3]
      const ppm_category = data[4]
      const ppm_output_category = data[5]
      const ppm_schema = data[6]

      for (let i = 1; i < data[0].length; i++) {
        const item = {
          uuid: uuid[i],
          author: author[i],
          title: title[i],
          src_obj: src_obj[i],
          ppm_category: ppm_category[i],
          ppm_output_category: ppm_output_category[i],
          ppm_schema: ppm_schema[i],
        }
        content.push(item)
      }
    })

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-center text-lg font-bold text-blue-900 md:text-4xl'>
        Press Release Luaran Penelitian
      </h1>
      <section className='grid grid-cols-1 gap-8 py-12 pb-24 lg:grid-cols-2 xl:grid-cols-4'>
        {content
          .filter((item) => item.ppm_category === 'Penelitian')
          .filter((item) => item.ppm_output_category === 'Medsos')
          .filter((item) => item.title !== '-' && item.title !== '')
          .map((item) => (
            <a
              href={item.src_obj}
              key={item.uuid}
              className='hover:cursor-pointer'
            >
              <Card>
                <CardHeader>
                  <CardTitle className='line-clamp-3'>
                    {toProperCase(item.title)}
                  </CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='line-clamp-3'>Ketua Tim: {item.author}</p>
                </CardContent>
                <CardFooter>
                  <Badge>{item.ppm_schema}</Badge>
                </CardFooter>
              </Card>
            </a>
          ))}
      </section>
    </main>
  )
}
