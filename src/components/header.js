import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import netlifyIdentity from "netlify-identity-widget"

const MenuItem = ({ url, children, classes }) => (
  <Link
    className={`text-xs text-center uppercase font-bold flex-auto tracking-widest ${ classes }`}
    to={ url }
    activeClassName="text-slate bg-blue"
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
      <header className="font-body p-4">
        <div className="container mx-auto flex content-between items-center">
          {/*Title & Logo*/}
          <Link to="/" className="font-display text-4xl flex-auto leading-none border-none uppercase">{siteTitle}</Link>
          <nav className="menu__main flex flex-auto content-between">
            <MenuItem url="/blog">Blog</MenuItem>
            <MenuItem url="/products/">Products</MenuItem>
            <MenuItem classes="snipcart-summary snipcart-checkout">My Cart</MenuItem>
          </nav>
          {/*{ Netlify Log in Menu }*/}
          <nav className="flex-auto self-end text-right font-bold text-sm" data-netlify-identity-menu></nav>
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
