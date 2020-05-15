import React from "react"
import Ridero from "../img/ridero.svg"
import Litres from "../img/litres.svg"

export default () => (
  <footer>
    <nav>
    <a href="https://www.litres.ru/tvorcheskoe-obedinenie-kultura-gedonizma/" target="_blank" rel="noopener noreferrer">
      <img src={Litres} alt="Литрес" />
      </a>
      <a href="https://ridero.ru/author/kultura_gedonizma_gx5on/" target="_blank" rel="noopener noreferrer">
      <img src={Ridero} alt="Ridero" />
      </a>
      <a>О нас</a>
      <a className="activeLink">Книги</a>
    </nav>
  </footer>
)
