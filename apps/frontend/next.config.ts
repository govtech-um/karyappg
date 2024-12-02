import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
