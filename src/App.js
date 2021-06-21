import "./App.css";
import logo from "./assets/logo.svg";
import heroImg from "./assets/illustration-working.svg";
import imgBrand from "./assets/icon-brand-recognition.svg";
import imgDetailed from "./assets/icon-detailed-records.svg";
import imgFully from "./assets/icon-fully-customizable.svg";
import iconFacebook from "./assets/icon-facebook.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconPinterest from "./assets/icon-pinterest.svg";
import iconInstagram from "./assets/icon-instagram.svg";
import menu from "./assets/menu_icon.svg";
import iconClose from "./assets/close_icon.svg";
import Card from "./components/card/card";
import data from "./cardData.json";
import { useEffect, useRef } from "react";

const srcImages = [imgBrand, imgDetailed, imgFully];
const socialICons = [iconFacebook, iconTwitter, iconPinterest, iconInstagram];

function App() {
  let showNav = false;
  const refNav = useRef(null);
  const refIconClose = useRef(null)
  const refIconHamburger = useRef(null)

  useEffect(() => {
    // console.log(refNav)
  }, []);

  const handleClickMenu = (e) => {
    // console.log(refNav)
    showNav = !showNav;
    // console.log(showNav);
    if (showNav) {
      refNav.current.classList.add("show");
      refIconHamburger.current.classList.add("hidden");
      refIconClose.current.classList.add("show");
    } else {
      refNav.current.classList.remove("show");
      refIconHamburger.current.classList.remove("hidden");
      refIconClose.current.classList.remove("show");
    }
  };
  return (
    <div className="App">
      <header className="App-header padding-content">
        <div className="App-header-content">
          <div className="App-header-logo">
            <img src={logo} alt="Company logotype" />
          </div>
          <nav ref={refNav} className="App-header-nav">
            <ul>
              <div className="nav-links">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </div>
              <div className="nav-links-session">
                <li>Login</li>
                <li>
                  <div className="nav-content-button">
                    <form>
                      <button>Sign Up</button>
                    </form>
                  </div>
                </li>
              </div>
            </ul>
          </nav>
          <div onClick={handleClickMenu} className="header-menu-icon">
            <div ref={refIconHamburger} className="header-menu-hamburger">
              <img src={menu} alt=""></img>
            </div>
            <div ref={refIconClose} className="header-menu-close">
              <img src={iconClose} alt=""></img>
            </div>
          </div>
        </div>
      </header>

      <section className="App-hero-content">
        <div className="hero-content-action">
          <h1>More than just shorter links</h1>
          <h4 className="text-gray">
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

      <section className="App-input-link-content padding-content">
        <div className="link-content-short">
          <form>
            <div className="link-content input">
              <input placeholder="Shorten a link here..." />
            </div>
            <div className="link-content button">
              <button>Shorten It!</button>
            </div>
          </form>
        </div>
        <div className="result-short-link"></div>
      </section>

      <section className="App-statistics-content padding-content">
        <div className="statistics-content-title">
          <h2>Advanced Statistic</h2>
          <h4 className="text-gray">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </h4>
        </div>
        <div className="statistics-content-cards">
          {data.cards.map((card, i) => {
            const path = srcImages[i];
            return (
              <Card
                key={card.title}
                imgSrc={path}
                cardTitle={card.title}
                cardSubTitle={card.subTitle}
                altText={card.altText}
              />
            );
          })}
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
              {socialICons.map((icon) => (
                <img key={icon} src={icon} alt={icon}></img>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
