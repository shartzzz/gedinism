import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Book from "../../pages/book/intro"

import AudioIntro from "../../sound/intro.wav"

const ListLink = props => (
  <Link className={props.className} to={props.to}>{props.children}</Link>
)

export default () => {
  const data = useStaticQuery(graphql`
    query I {
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
    <>
      <div>
      <ListLink className='lArr' to="/"><i>&larr;</i></ListLink>
      <ListLink className='rArr' to="/"><i>&rarr;</i></ListLink>
      <Img fluid={data.file.childImageSharp.fluid} alt="Интро" />
      </div>
      <div className="trapeze">
        <p className="textBook">Сонное царство. Интро - слушать онлайн</p>
      </div>
      <audio controls>
        <source src={AudioIntro} type="audio/wav" />
        <p>
          Ваш браузер не поддерживает HTML5 аудио. Вот взамен
          <a href={AudioIntro}>ссылка на аудио</a>
        </p>
      </audio>
    </>
  )
}