import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct } }) => (
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
      <p>{ contentfulProduct.description }</p>
      <Img style={{ margin: '0 auto', maxWidth: 600 }} fluid={ contentfulProduct.image.fluid } />
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
    }
  }
}
`

export default ProductTemplate