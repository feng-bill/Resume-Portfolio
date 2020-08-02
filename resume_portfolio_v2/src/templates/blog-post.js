import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/blog_layout"

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const post = data.markdownRemark

  const twitter = (
    <FontAwesomeIcon icon={faTwitter} size="lg" pull="left" className="icon" />
  )

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3>
          By: {post.frontmatter.author} | Date: {post.frontmatter.date}
        </h3>
        <div>
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            data-show-count="false"
          >
            {twitter}
          </a>

          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        author,
        date
      }
    }
  }
`
