import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Join from "../components/join"
import Partners from "../components/partners"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="main col-1-1">
      <Join text="How do I Join?" />
      <Partners text="Our Partner Brokers" />
    </main>
  </Layout>
)

export default IndexPage
