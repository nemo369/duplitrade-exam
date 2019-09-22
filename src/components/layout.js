import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import "../sass/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          footeMenus{
            name
            link
            subs{
              name
              link
            }
          }
        }
      }
    }
  `)
    
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer  menus={data.site.siteMetadata.footeMenus}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
