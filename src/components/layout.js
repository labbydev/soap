/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const getSiteMetada = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          createdAt
        }
      }
    }
  `

const Layout = ({ children }) => {
  const data = useStaticQuery(getSiteMetada)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container mx-auto p-4">
        <main>{children}</main>
        <footer>
          Built by
          {` `}{data.site.siteMetadata.author} Created {data.site.siteMetadata.createdAt}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
