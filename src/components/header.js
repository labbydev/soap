import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import netlifyIdentity from "netlify-identity-widget"

const MenuItem = ({ url, children, classes }) => (
  <Link
    className={`text-sm text-center uppercase flex-auto tracking-widest mx-2 block py-2 max-w-xs`}
    to={ url }
    activeClassName="text-slate border-blue border-b-2 border-solid"
  >
    { children }
  </Link>
)

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init()
  }

  render() {
    const { siteTitle } = this.props

    return (
      <header className="container mx-auto flex content-between items-center px-4 py-2">
          {/*Title & Logo*/}
          <Link to="/" className="font-serif text-3xl flex-none lowercase italic">{siteTitle}</Link>
          <nav className="menu__main flex flex-grow m-x4 h-full min-h-full justify-center">
            <MenuItem url="/blog">Blog</MenuItem>
            <MenuItem url="/products/">Products</MenuItem>
          </nav>
          {/*{ Netlify Log in Menu }*/}
          <div className="utility-links flex-initial self-end text-right uppercase text-xs tracking-wide">
            {/*<nav className="" data-netlify-identity-menu></nav>*/}
            <Link className="snipcart-summary snipcart-checkout">My Cart</Link>
          </div>
      </header>
    )}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
