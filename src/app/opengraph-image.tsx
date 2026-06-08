import { ImageResponse } from 'next/og'
import { SITE_DESCRIPTION } from '@/utils/constants'

export const runtime = 'edge'
export const alt = 'Diaz Linggaputra - Full-stack Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          color: '#f8fafc',
          background:
            'linear-gradient(135deg, #0b0d10 0%, #101418 52%, #07100e 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#64fed9',
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div>diazlinggaputra.dev</div>
          <div>full-stack developer</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.96,
              fontWeight: 900,
              maxWidth: 850,
              letterSpacing: 0,
            }}
          >
            Diaz Linggaputra_
          </div>
          <div
            style={{
              width: 180,
              height: 4,
              background: '#f6bd60',
            }}
          />
          <div
            style={{
              color: '#cbd5e1',
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            {SITE_DESCRIPTION}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
