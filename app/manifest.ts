import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kenton Software',
    short_name: 'Kenton',
    description: 'حلول برمجية متكاملة',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}