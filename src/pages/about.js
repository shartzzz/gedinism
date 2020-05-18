import React from "react"
import Layout from "../components/layout"

import Telegram from "../img/telegram.svg"
import VK from "../img/vk.svg"

export default () => {
  return (
    <Layout>
      <h1>О нас</h1>
      <main className="about">
        <p>
          <b>Кто мы?</b> Мы - творческое объединение.
        </p>
        <p>
          <b>Культура Гедонизма</b> Во время беззакония и безбожия можно процветать
          только в культуре обращенной к своим внутренним ценностям. Гедонизм,
          как удовольствие от жизни. Гедонизм, как процветание морали и
          нравственности.
        </p>
        <div>
          <a
            href="https://t.me/cultofhedonism"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Телеграм" height="45px" />
          </a>
          Подписывайтесь
          <a
            href="http://vk.com/club182873704"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={VK} alt="Вконтакте" height="45px" />
          </a>
        </div>
      </main>
    </Layout>
  )
}
