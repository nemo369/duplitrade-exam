import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Providers from '../components/providers/Providers'
const strategyProviders = () => (
  <Layout>
    <SEO title="Strategy Providers" />
    <main className="main-providers col-1-1">
      <h1> Get started with our Strategy Providers </h1>
      <Providers />
  </main>
  </Layout>
)

export default strategyProviders
