import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import gatsbyIcon from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        {/*Title & Logo*/}
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <img src={gatsbyIcon} alt="gatsby logo" style={{
                border: '3px solid orange',
                borderRadius: '50%',
                margin: '0 5px',
                width: '50px',
            }} />
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
          {/*{Shopping Cart Summary}*/}
          <div style={{ color: 'white', cursor: 'pointer' }} className="snipcart-summary snipcart-checkout">
            <div><strong>My Cart</strong></div>
            <div><span style={{ fontWeight: 'bold' }} className="snipcart-total-items"></span>{" "}Items in cart</div>
            <div>Total price{' '}<span style={{ fontWeight: 'bold' }} className="snipcart-total-price"></span></div>
          </div>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
