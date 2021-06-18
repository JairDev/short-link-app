import "./App.css";
import logo from "./assets/logo.svg"
import heroImg from "./assets/illustration-working.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <div className="App-header-logo">
            <img src={logo} alt="Company logotype"/>
          </div>
          <nav className="App-header-nav">
            <ul>
              <div className="nav-links">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </div>
              <div className="nav-links-sessions">
                <li>Login</li>
                <li>Sign Up</li>
              </div>
            </ul>
          </nav>
          <div className="header-hamburger-icon">
            ham
          </div>
        </div>
      </header>

      <section className="App-hero-content">
        <div className="hero-content-action">
          <h1>More than just shorter links</h1>
          <h4>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </h4>
          <div className="hero-content-button">
            <form>
              <button>Get Started</button>
            </form>
          </div>
        </div>
        <div className="hero-content-img">
          <img src={heroImg} alt="Person in front of a desk" />
        </div>
      </section>

      <section className="App-input-link-content">
        <div className="link-content">
          <form>
            <div className="link-content input">
              <input />
            </div>
            <div className="link-content button">
              <button>Shorten It!</button>
            </div>
          </form>
        </div>
      </section>

      <section className="App-statistics-content">
        <div className="statistics-content-title">
          
          <h2>Advanced Statistic</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistics-content-cards">
          <div className="statistics-card">
            <div className="statistics-card-img">
              <img src="" alt="" />
            </div>
            <div className="statistics-card-title">
              <h5>Brand Recognition</h5>
            </div>
            <div className="statistics-card-text">
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="App-footer-content">
        <div className="footer-content">
          <div className="footer-content-action">
            <h2>Boost your links today</h2>
            <div className="footer-content-button">
              <form>
                <button>Get Started</button>
              </form>
            </div>
          </div>
          <div className="footer-content-navigation">
            <h3>Shortly</h3>
            <nav className="App-footer-nav">
              <ul>
                <div className="footer-nav-links">
                  <li>Features</li>
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </div>
                <div className="footer-nav-links">
                  <li>Resources</li>
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </div>
                <div className="footer-nav-links">
                  <li>Company</li>
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </div>
              </ul>
            </nav>
            <div className="footer-content-social-media">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
