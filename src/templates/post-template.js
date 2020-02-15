import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const PostTemplate = ({ data: post }) => (
    <Layout>
        <div>
            <h1>{post.markdownRemark.frontmatter.title}</h1>
            <div>{post.markdownRemark.timeToRead} {post.markdownRemark.timeToRead > 1 ? 'minutes' : 'minute'}</div>
            <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
        </div>
    </Layout>
)

export const query = graphql`
query($slug: String!) {
markdownRemark(fields: {
    slug: { eq: $slug }
  }) {
    html
    timeToRead
    frontmatter {
      title
    }
  }
}`

export default PostTemplate