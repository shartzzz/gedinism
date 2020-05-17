import React, { Component } from "react"
import Carousel from "react-bootsrap/Carousel"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default class CarouselBox extends Component {
    render() {
      const data = useStaticQuery(graphql`
      query Book {
        file(relativePath: { eq: "intro.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid(maxWidth: 1751, maxHeight: 2485) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
        return (
            <Carousel>
                <Carousel.Item>
                      <Img fluid={data.file.childImageSharp.fluid} alt="Интро" />
                </Carousel.Item>
            </Carousel>
        )
    }
}