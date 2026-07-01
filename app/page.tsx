export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <p style={{
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        fontSize: '0.7rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: 'var(--sand)',
        margin: '0 0 1.25rem',
      }}>
        Pacific Beach, San Diego
      </p>

      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(3rem, 9vw, 6.5rem)',
        fontWeight: 400,
        lineHeight: 1.05,
        color: 'var(--white)',
        margin: '0 0 1rem',
      }}>
        The Art of{' '}
        <em style={{ color: 'var(--sand)' }}>Jiu Jitsu</em>
      </h1>

      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
        fontStyle: 'italic',
        color: 'rgba(245,245,240,0.5)',
        margin: '0 0 3rem',
        lineHeight: 1.7,
      }}>
        Train with purpose. Grow with community.
      </p>

      <a
        href="https://buy.stripe.com/REPLACE_WITH_YOUR_LINK"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'var(--navy)',
          background: 'var(--sand)',
          padding: '1.1rem 2.6rem',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Join Now
      </a>
    </main>
  )
}
