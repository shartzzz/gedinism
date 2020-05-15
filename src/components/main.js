import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AudioIntro from "../sound/intro.wav"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
    <main>
      <Img fluid={data.file.childImageSharp.fluid} alt="Интро" />
      <div className="trapeze"></div>
      <audio controls>
        <source src={AudioIntro} type="audio/wav" />
        <p>
          Ваш браузер не поддерживает HTML5 аудио. Вот взамен
          <a href={AudioIntro}>ссылка на аудио</a>
        </p>
      </audio>
    </main>
  )
}
