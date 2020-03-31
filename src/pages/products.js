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
      <div
        className="grid grid-cols-4 gap-3"
      >
        {/*{ Products List}*/}
        { products.map(({ node: product }) => (
          <div
            key={ product.id }
            className="text-center grid"
          >
            { product.image ? <Img className="col-end-auto" style={{ maxWidth: 300 }} fluid={ product.image.fluid }/> : <Image className="col-end-auto" style={{ maxWidth: 400 }} /> }
            <h3><Link className="pb-1 leading-relaxed" to={`/products/${ product.slug }`}>{ product.name }</Link></h3>
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