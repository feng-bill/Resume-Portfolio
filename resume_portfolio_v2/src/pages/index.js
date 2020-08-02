import React from "react"

import Layout from "../components/layout"

import Header from "../components/header"
import Card from "../sections/card/Card"
import Blog from '../sections/blog/Blog'
import Footer from '../components/footer'

import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

//import { Link } from "gatsby"
//import Image from "../components/image"
//import SEO from "../components/seo"

const index = () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Card />
      <Layout>
        <Blog />
      </Layout>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default index;



//   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>