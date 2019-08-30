import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/Barnardos_logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar__container">
          <div className="navbar__brandLogo">
            <Link to="/" className="navbar__item" title="Logo">
              <img src={logo} alt="Barnardos" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar__burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar__start">
              <Link className="navbar__item" to="/about">
                About
              </Link>
              <Link className="navbar__item" to="/products">
                Products
              </Link>
              <Link className="navbar__item" to="/blog">
                Blog
              </Link>
              <Link className="navbar__item" to="/contact">
                Contact
              </Link>
              <Link className="navbar__item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            {/* <div className="navbar__end">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
