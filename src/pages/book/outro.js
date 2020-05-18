import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout"

import Larr from "../../img/lArr.svg"
import AudioIntro from "../../sound/outro.wav"

const ListLink = props => (
  <Link className={props.className} to={props.to}>
    {props.children}
  </Link>
)

export default () => {
  const data = useStaticQuery(graphql`
    query Au {
      file(relativePath: { eq: "autro.jpg" }) {
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
    <Layout>
      <h1>Книги</h1>
      <main>
        <div>
          <ListLink className="lArr" to="/book/baun">
            <img src={Larr}></img>
          </ListLink>
          <Img fluid={data.file.childImageSharp.fluid} alt="Интро" />
        </div>
        <div className="trapeze">
          <p className="textBook">Сонное царство. Аутро - слушать онлайн</p>
        </div>
        <audio controls>
          <source src={AudioIntro} type="audio/wav" />
          <p>
            Ваш браузер не поддерживает HTML5 аудио. Вот взамен
            <a href={AudioIntro}>ссылка на аудио</a>
          </p>
        </audio>
      </main>
    </Layout>
  )
}
