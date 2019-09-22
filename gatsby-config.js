const footeMenus = [
  {
    name: "About",
    link: false,
    subs: [
      { name: "About Us", link: "/" },
      { name: "Why DupliTrade", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
  {
    name: "Getting Started",
    link: false,
    subs: [
      { name: "AHow Does It Work", link: "/" },
      { name: "FAQ ", link: "/" },
      { name: "Strategy Providers Guide", link: "/" },
      { name: "Glossary", link: "/" },
    ],
  },
  {
    name: "BLog",
    link: false,
    subs: [
      { name: "Tips", link: "/" },
      { name: "Adv", link: "/" },
      { name: "What Is", link: "/" },
      { name: "How To", link: "/" },
    ],
  },
  {
    name: "Advantages",
    link: false,
    subs: [
      { name: "Advantages", link: "/" },
      { name: "Clients ", link: "/" },
      { name: "Strategy Providers", link: "/" },
    ],
  },
]

const gatsbySourceFildata = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `data`,
    path: `${__dirname}/src/data`,
  },
}
const gatsbySourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
}

const gatsbyPluginManifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `gatsby-starter-default`,
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/favicon.png`,
  },
}

const sourceFilesystemImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images/`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Dupli Trade`,
    author: `Naaman Frenkel`,
    description: " rewrite www.duplitrade.com",
    footeMenus: footeMenus,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    gatsbySourceFilesystem,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    gatsbyPluginManifest,
    sourceFilesystemImages,
    gatsbySourceFildata,
    `gatsby-transformer-remark`,
  ],
}
