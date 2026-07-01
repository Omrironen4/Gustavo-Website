'use client'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontSize: '0.6rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(245,245,240,0.45)',
  marginBottom: '0.5rem',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(245,245,240,0.12)',
  color: 'var(--white)',
  padding: '0.85rem 1rem',
  fontFamily: 'Georgia, serif',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box',
}

export default function ContactForm() {
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input type="text" placeholder="Your name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="your@email.com" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Phone</label>
        <input type="tel" placeholder="(619) 000-0000" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          rows={5}
          placeholder="Tell us about your goals or ask any questions..."
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'var(--navy)',
          background: 'var(--sand)',
          border: 'none',
          padding: '1rem 2rem',
          cursor: 'pointer',
          alignSelf: 'flex-start',
        }}
      >
        Send Message
      </button>
    </form>
  )
}
