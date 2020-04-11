import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "./button"

const textColors = {
  light: `text-white`,
  dark: `text-black`
}

const Hero = ({ title, description, buttonText, image, textColor }) => {
  const defaultImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "unsplash_candles.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="hero">
      <BackgroundImage
        fluid={image || defaultImage.file.childImageSharp.fluid}
        className="p-20 bg-center bg-fixed bg-cover"
      >
        <div className={`
          ${ textColors[textColor] || textColors.dark }
          hero__content container mx-auto text-center max-w-md
        `}>
          <h1
            className="text-4xl my-8"
          >{title}</h1>
          <p
            className="my-4"
          >{description}</p>
          <Button
            size="lg"
            buttonColor="transparent"
          >{buttonText}</Button>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Hero