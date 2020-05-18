import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import Rarr from "../../img/rArr.svg"
import AudioIntro from "../../sound/intro.wav"

const ListLink = props => (
  <Link className={props.className} to={props.to}>{props.children}</Link>
)

export default () => {
  const data = useStaticQuery(graphql`
    query intro {
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
      <div>
      <ListLink className='rArr' to="/book/baun"><img src={Rarr} alt="Баюн"></img></ListLink>
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
    </main>
  )
}
