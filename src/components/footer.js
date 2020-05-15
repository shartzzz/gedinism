import React from "react"
import { Link } from "gatsby"

import Ridero from "../img/ridero.svg"
import Litres from "../img/litres.svg"


const ListLink = props => (
  <Link to={props.to}>{props.children}</Link>
)

export default () => (
  <footer>
    <nav>
    <a href="https://www.litres.ru/tvorcheskoe-obedinenie-kultura-gedonizma/" target="_blank" rel="noopener noreferrer">
      <img src={Litres} alt="Литрес" />
      </a>
      <a href="https://ridero.ru/author/kultura_gedonizma_gx5on/" target="_blank" rel="noopener noreferrer">
      <img src={Ridero} alt="Ridero" />
      </a>
      <ListLink to="/about/">О нас</ListLink>
      <ListLink className='activeLink' to="/">Книги</ListLink>
    </nav>
  </footer>
)
