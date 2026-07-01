export default function Footer() {
  return (
    <footer style={{
      background: '#060a14',
      borderTop: '1px solid rgba(201,169,110,0.12)',
      padding: '3rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
        <span style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontWeight: 700,
          fontSize: '0.9rem',
          letterSpacing: '0.25em',
          color: 'var(--white)',
          textTransform: 'uppercase',
        }}>
          Pacific Beach
        </span>
        <span style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          color: 'var(--sand)',
          textTransform: 'uppercase',
          marginTop: '3px',
        }}>
          Jiu Jitsu
        </span>
      </div>

      <div style={{
        display: 'flex',
        gap: '2rem',
        marginTop: '0.5rem',
      }}>
        {['#home', '#about', '#contact'].map((href, i) => (
          <a
            key={href}
            href={href}
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,245,240,0.4)',
              textDecoration: 'none',
            }}
          >
            {['Home', 'About', 'Contact'][i]}
          </a>
        ))}
      </div>

      <p style={{
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        color: 'rgba(245,245,240,0.25)',
        textTransform: 'uppercase',
        marginTop: '0.5rem',
      }}>
        © {new Date().getFullYear()} Pacific Beach Jiu Jitsu · All Rights Reserved
      </p>
    </footer>
  )
}
