import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kenton Software - Integrated Software Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '40px',
        }}
      >
        <img
          src="https://kenton-software.vercel.app/kinton-logo.png" // ✅ رابط الصورة من مجلد public
          alt="Kinton Software Logo"
          style={{
            width: '80%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}