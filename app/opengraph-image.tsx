import { ImageResponse } from 'next/og'

export const alt = 'Kenton Software'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #10b981, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" rx="24" fill="white" />
            <path
              d="M25 25V75M25 50L45 25M25 50L45 75"
              stroke="#10b981"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M75 30C75 30 65 25 57 25C49 25 45 30 45 35C45 40 50 42 57 45C64 48 70 50 70 58C70 66 62 75 52 75C42 75 35 70 35 70"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ fontSize: 72, fontWeight: 'bold' }}>Kenton Software</div>
        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.9 }}>
          حلول برمجية متكاملة
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}