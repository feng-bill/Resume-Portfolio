import React from "react"
import Header from "../components/header"
import Card from "../sections/card/Card"
import Blog from "../sections/blog/Blog"
import Footer from "../components/footer"

import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const index = () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Card />
      {/* <Layout>
        <Blog />
      </Layout> */}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default index
