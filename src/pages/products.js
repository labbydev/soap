import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import netlifyIndentity from "netlify-identity-widget"

import Layout from "../components/layout"
import Image from "../components/image"

class Products extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts()
    netlifyIndentity.on('login', user => this.getProducts(user))
    netlifyIndentity.on('logout', () => this.getProducts())
  }

  getProducts = user => {
    console.log('Current User', user)
    const allProducts = this.props.data.allContentfulProduct.edges
    const products = netlifyIndentity.currentUser() !== null ?
      allProducts :
      allProducts.filter(({ node: product }) => !product.private )
    this.setState({ products })
  }

  render() {
    const { products } = this.state

  return (
    <Layout>
      <h2>Products</h2>
      <div>
        {/*{ Products List}*/}
        { products.map(({ node: product }) => (
          <div key={ product.id }>
            <Link
              to={`/products/${ product.slug }`}
              style={{ textDecoration: 'none', color: '#551a8b' }}>
              <h3>{ product.name } ·{' '}<span style={{
                fontSize: '1.2rem',
                fontWeight: 300,
                color: '#f60'
              }}>${ product.price }</span></h3>
            </Link>
            { product.image ? <Img style={{ maxWidth: 300 }} fluid={ product.image.fluid }/> : <Image style={{ maxWidth: 400 }} /> }
          </div>
        )) }
      </div>
    </Layout>
  )
}}
export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          private
          image {
            fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Products