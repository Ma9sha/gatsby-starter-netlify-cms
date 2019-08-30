import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__container">
            <div className="footer__columns">
              <div className="footer__column">
                <section className="footer__internalLinks">
                  <ul className="footer__internalMenu">
                    <li>
                      <Link to="/" className="footer__internalMenuItem">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="footer__internalMenuItem" to="/about">
                        About
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li> */}
                    <li>
                      <Link className="footer__internalMenuItem" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="/admin/" target="_blank"
                        rel="noopener noreferrer">
                        Admin
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              </div>
              <div className="footer__socialLinks">
                <a className="footer__facebook" href="https://facebook.com/barnardos" target="_blank" 
                rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
                <a className="footer__twitter" href="https://twitter.com/barnardos" target="_blank" 
                rel="noopener noreferrer">
                  <img
                    src={twitter}
                    alt="Twitter" 
                  />
                </a>
              </div>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
