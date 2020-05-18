import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout"

import Larr from "../../img/lArr.svg"
import Rarr from "../../img/rArr.svg"
import AudioIntro from "../../sound/Bayun.mp3"

const ListLink = props => (
  <Link className={props.className} to={props.to}>{props.children}</Link>
)

export default () => {
  const data = useStaticQuery(graphql`
    query Ba {
      file(relativePath: { eq: "baun.jpg" }) {
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
      <ListLink className='lArr' to="/"><img src={Larr}></img></ListLink>
      <ListLink className='rArr' to="/book/outro"><img src={Rarr}></img></ListLink>
      <Img fluid={data.file.childImageSharp.fluid} alt="Интро" />
      </div>
      <div className="trapeze">
        <p className="textBook">Сонное царство. Баюн - слушать онлайн</p>
      </div>
      <audio controls>
        <source src={AudioIntro} type="audio/mp3" />
        <p>
          Ваш браузер не поддерживает HTML5 аудио. Вот взамен
          <a href={AudioIntro}>ссылка на аудио</a>
        </p>
      </audio>
    </main>
    </Layout>
    
  )
}