import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data: { file } }) => (
  <Layout>
    <SEO title="Home"/>
    <Hero
      title="Something smells better than poop house."
      // image={ file.childImageSharp.fluid}
      description="Candles and soaps that spark joy."
      buttonText="Check out the products"
      textColor="light"
    />
  </Layout>
)

export const query = graphql`
    query {
        file(relativePath: { eq: "hans-vivek-66qsl7ia2cE-unsplash.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default IndexPage
