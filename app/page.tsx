import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main>
      {/* ─── HERO / HOME ─────────────────────────────────────────── */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '8rem 2rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #0a0f1e 0%, #0d1a2e 50%, #0a0f1e 100%)',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--sand)',
          marginBottom: '1.5rem',
          margin: '0 0 1.5rem',
        }}>
          Pacific Beach, San Diego
        </p>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2.8rem, 8vw, 6rem)',
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          color: 'var(--white)',
          margin: '0 0 1rem',
          maxWidth: '700px',
        }}>
          The Art of{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--sand)' }}>Jiu Jitsu</em>
        </h1>

        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'rgba(245,245,240,0.55)',
          maxWidth: '480px',
          lineHeight: 1.7,
          margin: '0 0 3rem',
          fontStyle: 'italic',
        }}>
          Train with purpose. Grow with community. Compete with confidence.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#contact"
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: 'var(--navy)',
              background: 'var(--sand)',
              padding: '1rem 2.2rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Start Training
          </a>
          <a
            href="#about"
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 400,
              color: 'var(--white)',
              border: '1px solid rgba(245,245,240,0.25)',
              padding: '1rem 2.2rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Learn More
          </a>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,240,0.3)',
          }}>Scroll</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)',
          }} />
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────── */}
      <section style={{
        background: '#060a14',
        borderTop: '1px solid rgba(201,169,110,0.12)',
        borderBottom: '1px solid rgba(201,169,110,0.12)',
        padding: '3rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(2rem, 6vw, 6rem)',
        flexWrap: 'wrap',
      }}>
        {[
          { value: 'All Levels', label: 'Welcome' },
          { value: 'BJJ', label: 'Focused' },
          { value: 'PB', label: 'San Diego' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--sand)',
              lineHeight: 1,
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(245,245,240,0.4)',
              marginTop: '0.5rem',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ─── ABOUT ───────────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--sand)',
          margin: '0 0 1.5rem',
        }}>
          About Us
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          color: 'var(--white)',
          margin: '0 0 2.5rem',
          maxWidth: '600px',
        }}>
          Where the ocean meets{' '}
          <em style={{ color: 'var(--sand)' }}>the mat</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          <div>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(245,245,240,0.7)',
              margin: '0 0 1.5rem',
            }}>
              Pacific Beach Jiu Jitsu is a premier training ground nestled in the heart of PB, San Diego.
              We offer world-class Brazilian Jiu-Jitsu instruction in a welcoming, no-ego environment.
            </p>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(245,245,240,0.7)',
              margin: 0,
            }}>
              Whether you&apos;re stepping on the mat for the first time or preparing for competition,
              our coaches meet you where you are and push you to grow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { title: 'All Skill Levels', desc: 'Beginners and seasoned competitors train side by side in a structured, safe environment.' },
              { title: 'Expert Coaching', desc: 'Learn from experienced black belts dedicated to your development on and off the mat.' },
              { title: 'Community First', desc: 'A gym family built on mutual respect, hard work, and a love for the art.' },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderLeft: '2px solid var(--sand)',
                  paddingLeft: '1.25rem',
                }}
              >
                <div style={{
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  marginBottom: '0.4rem',
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'rgba(245,245,240,0.55)',
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div style={{
          marginTop: '4rem',
          width: '100%',
          aspectRatio: '16/7',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(201,169,110,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245,245,240,0.2)',
          }}>
            Image coming soon
          </span>
        </div>
      </section>

      {/* ─── MEMBERSHIP / STRIPE CTA ─────────────────────────────── */}
      <section style={{
        background: '#060a14',
        borderTop: '1px solid rgba(201,169,110,0.12)',
        borderBottom: '1px solid rgba(201,169,110,0.12)',
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--sand)',
          margin: '0 0 1.25rem',
        }}>
          Membership
        </p>
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 400,
          color: 'var(--white)',
          margin: '0 0 1rem',
        }}>
          Ready to begin?
        </h2>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '1rem',
          color: 'rgba(245,245,240,0.5)',
          fontStyle: 'italic',
          margin: '0 auto 3rem',
          maxWidth: '400px',
          lineHeight: 1.7,
        }}>
          Sign up and pay securely online. Your first class is on us.
        </p>

        {/* Replace href with your Stripe payment link */}
        <a
          href="https://buy.stripe.com/REPLACE_WITH_YOUR_LINK"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'var(--navy)',
            background: 'var(--sand)',
            padding: '1.1rem 2.8rem',
            textDecoration: 'none',
          }}
        >
          Pay &amp; Enroll Now
        </a>

        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          color: 'rgba(245,245,240,0.2)',
          marginTop: '1.5rem',
          textTransform: 'uppercase',
        }}>
          Secured by Stripe · Cancel anytime
        </p>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: 'clamp(5rem, 10vw, 9rem) 2rem',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--sand)',
          margin: '0 0 1.5rem',
        }}>
          Contact
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 400,
          lineHeight: 1.1,
          color: 'var(--white)',
          margin: '0 0 3rem',
        }}>
          Get in touch
        </h2>

        <ContactForm />

        <div style={{
          marginTop: '4rem',
          paddingTop: '3rem',
          borderTop: '1px solid rgba(201,169,110,0.12)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {[
            { label: 'Location', value: 'Pacific Beach, San Diego, CA' },
            { label: 'Email', value: 'info@pbjj.com' },
            { label: 'Instagram', value: '@pacificbeachjiujitsu' },
          ].map((c) => (
            <div key={c.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
              <span style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--sand)',
                minWidth: '80px',
              }}>
                {c.label}
              </span>
              <span style={{
                fontFamily: 'Georgia, serif',
                fontSize: '0.95rem',
                color: 'rgba(245,245,240,0.65)',
              }}>
                {c.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

