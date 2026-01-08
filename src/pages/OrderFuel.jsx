import { useEffect } from 'react'

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap");

.order-fuel-body {
  background: #f5f7f6;
  color: #1f2a2e;
}

.order-fuel-page {
  min-height: 100vh;
  padding: 48px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", "Segoe UI", sans-serif;
  background: #f5f7f6;
}

.order-fuel-shell {
  width: min(1120px, 100%);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  background: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(20, 40, 50, 0.12);
}

.order-fuel-visual {
  position: relative;
  background: linear-gradient(145deg, #edf7f0 0%, #f8fbfa 100%);
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0;
  min-height: 540px;
}

.order-fuel-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.order-fuel-visual__copy {
  position: absolute;
  left: 32px;
  bottom: 32px;
  background: rgba(255, 255, 255, 0.92);
  padding: 20px 22px;
  border-radius: 16px;
  max-width: 320px;
  box-shadow: 0 12px 30px rgba(18, 40, 34, 0.15);
}

.order-fuel-kicker {
  color: #5b8f79;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}

.order-fuel-visual__copy h1 {
  font-size: 28px;
  margin-bottom: 8px;
  color: #0f2b2f;
}

.order-fuel-visual__copy p {
  font-size: 14px;
  line-height: 1.5;
  color: #3e555f;
}

.order-fuel-panel {
  padding: 48px 48px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
}

.order-fuel-logo {
  width: 160px;
  margin-bottom: 24px;
}

.order-fuel-panel h2 {
  font-size: 30px;
  margin-bottom: 8px;
  color: #0f2b2f;
}

.order-fuel-subtitle {
  font-size: 15px;
  color: #4a646d;
  margin-bottom: 28px;
}

.order-fuel-form {
  display: grid;
  gap: 14px;
}

.order-fuel-form label {
  font-size: 13px;
  font-weight: 600;
  color: #3c545c;
}

.order-fuel-input {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  border: 1px solid #d4e1da;
  border-radius: 12px;
  padding: 12px 14px;
  gap: 10px;
  background: #fdfefe;
}

.order-fuel-prefix {
  font-size: 14px;
  font-weight: 600;
  color: #2f4a4f;
}

.order-fuel-input input {
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: #1f2a2e;
}

.order-fuel-input input::placeholder {
  color: #94a3a8;
}

.order-fuel-cta {
  margin-top: 6px;
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #5abe8d 0%, #4b9d75 100%);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.order-fuel-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 25px rgba(75, 157, 117, 0.25);
}

.order-fuel-meta {
  margin-top: 18px;
  font-size: 12px;
  color: #6a7f86;
}

.order-fuel-meta a {
  color: #4b9d75;
  font-weight: 600;
}

.order-fuel-download {
  margin-top: 28px;
}

.order-fuel-download p {
  font-size: 13px;
  color: #4a646d;
  margin-bottom: 12px;
}

.order-fuel-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.order-fuel-badge {
  border-radius: 10px;
  border: 1px solid #d7e2dd;
  background: #f7faf9;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 600;
  color: #2c444a;
  cursor: pointer;
}

.order-fuel-badge.secondary {
  background: #ffffff;
}

@media (max-width: 960px) {
  .order-fuel-shell {
    grid-template-columns: 1fr;
  }

  .order-fuel-visual {
    min-height: 320px;
  }

  .order-fuel-panel {
    padding: 36px 28px 40px;
  }

  .order-fuel-visual__copy {
    position: static;
    margin: 20px;
  }
}

@media (max-width: 640px) {
  .order-fuel-page {
    padding: 32px 12px;
  }

  .order-fuel-panel {
    padding: 28px 20px 32px;
  }

  .order-fuel-visual__copy {
    margin: 16px;
  }
}
`

export default function OrderFuel() {
  useEffect(() => {
    document.body.classList.add('order-fuel-body')
    return () => {
      document.body.classList.remove('order-fuel-body')
    }
  }, [])

  return (
    <main className="order-fuel-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="order-fuel-shell">
        <section className="order-fuel-visual" aria-label="FuelBuddy app preview">
          <img
            src="/assets/login-banner.71e2f925.png"
            alt="FuelBuddy delivery experience preview"
            loading="lazy"
          />
          <div className="order-fuel-visual__copy">
            <p className="order-fuel-kicker">FuelBuddy App</p>
            <h1>Order fuel in minutes.</h1>
            <p>
              Place diesel orders, track deliveries, and manage invoices from a single
              dashboard.
            </p>
          </div>
        </section>

        <section className="order-fuel-panel" aria-label="Order fuel login">
          <img
            className="order-fuel-logo"
            src="/wp-content/uploads/2023/10/logo-12-e1705658680102.png"
            alt="FuelBuddy"
          />
          <h2>Get started</h2>
          <p className="order-fuel-subtitle">
            Enter your mobile number to continue with doorstep diesel delivery.
          </p>

          <form
            className="order-fuel-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="order-fuel-phone">Mobile number</label>
            <div className="order-fuel-input">
              <span className="order-fuel-prefix">+91</span>
              <input
                id="order-fuel-phone"
                name="phone"
                type="tel"
                placeholder="Enter your mobile number"
                autoComplete="tel"
                inputMode="numeric"
              />
            </div>
            <button type="submit" className="order-fuel-cta">
              Continue
            </button>
          </form>

          <div className="order-fuel-meta">
            <p>
              By continuing, you agree to our{' '}
              <a href="/terms-conditions">Terms</a> and{' '}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </div>

          <div className="order-fuel-download">
            <p>Prefer the app?</p>
            <div className="order-fuel-badges">
              <button type="button" className="order-fuel-badge">
                Download on Play Store
              </button>
              <button type="button" className="order-fuel-badge secondary">
                Download on App Store
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
