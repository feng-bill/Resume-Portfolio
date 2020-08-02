import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import "./blog.css"

export default () => {

  const book = (
    <FontAwesomeIcon
      icon={faBook}
      style={{ verticalAlign: "middle", paddingRight: "10px" }}
    />
  )

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  )
    return (
      <section className="blogSection">
        <div>
          <h2>
            {book}Blog
            <span
              style={{
                fontSize: "0.6em",
                backgroundColor: "rgba(254,89,95,1.0)",
                // float: "right",
                margin: "30px",
              }}
            >
              Under Development
            </span>
          </h2>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <div className="blogCard">
                  <b>
                    {node.frontmatter.title}
                    <span> — {node.frontmatter.date}</span>
                  </b>
                  <div className="excerpt">
                    <p>{node.excerpt}</p>
                  </div>
                </div>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </section>
    )
};
