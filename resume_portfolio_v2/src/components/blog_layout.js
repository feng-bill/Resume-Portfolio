import React from "react"
import { Link } from "gatsby"
import "./blog_layout.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className="blogStyle">
    <div className="content">
      <header className="header">
        <Link to="/" className="directory">
          <span className="text">Home</span>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/contact/">Share</ListLink>
        </ul>
      </header>
      {children}
    </div>
  </div>
)
