import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Partners = ({ text }) => {
  const data = useStaticQuery(graphql`
  query AssetsPhotos {
    images: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)/" }
        relativeDirectory: { eq: "partners_logos" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`)
const images = data.images.edges
  return (
    <div className="partners__wrapper">
      <section className="partners">
        <h2>{text}</h2>
        <div className="partners__logos flex">
        {images &&
            images.map(image => {
              return (
                <Img
                className="partners__logo"
                fixed={image.node.childImageSharp.fixed}
                  alt={image.node.name}
                  key={image.node.id}
                />
              )
            })}
        </div>

        <button className="partners__btn">Create Account</button>
      </section>
    </div>
  )
}

export default Partners
