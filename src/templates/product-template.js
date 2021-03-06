import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"

const ProductTemplate = ({ data: { contentfulProduct }, location }) => (
  <Layout>
    <div
      style={{
        marginLeft: '0 auto',
        width: '100%',
        textAlign: 'center'
      }}
    >
      {/*{Product Info}*/}
      <h2>{ contentfulProduct.name } - <span style={{ color: '#ccc' }}>Added on { contentfulProduct.createdAt }</span></h2>
      <h4>$ { contentfulProduct.price } </h4>
      <p>{ contentfulProduct.description }</p>
      <button
        style={{
          background: 'darkorange',
          color: 'white',
          padding: '0.3em',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        className="snipcart-add-item"
        data-item-name={ contentfulProduct.name }
        data-item-price={ contentfulProduct.price }
        data-item-id={ contentfulProduct.id }
        data-item-image={ contentfulProduct.image ? contentfulProduct.image.file.url : '' }
        data-item-url={ location.pathname }
      >Add to cart</button>
      <br/>
      { contentfulProduct.image ? <Img style={{ margin: '0 auto', maxWidth: 600 }} fluid={ contentfulProduct.image.fluid } /> : <Image /> }
    </div>
  </Layout>
)

export const query = graphql`
query ($slug: String!){
  contentfulProduct(slug: {eq: $slug}) {
    name
    price
    description
    createdAt(formatString: "MMMM Do, YYYY")
    image {
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid
      }
      file {
        url
      }
    }
  }
}
`

export default ProductTemplate