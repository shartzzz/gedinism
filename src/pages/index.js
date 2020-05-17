import React from "react"
import Layout from "../components/layout"
import Book from "../components/book"

import "../style.css"

export default () => (
  <>
  <p className='textLeft'>К у л ь т у р а</p>
  <Layout>
    <h1>Книги</h1>
    <Book />
  </Layout>
  </>
)
