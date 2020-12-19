import React from "react"
import Layout from "../components/layout"

import './404.scss'
import Social from "../components/social"
import { Link } from "gatsby"

const NotFoundPage = (props) => (

  <Layout title="404">
    <main>
      <h3>Page not found: 404</h3>
      <Link to="/">Wróć / back</Link>
      <Social></Social>
    </main>
  </Layout>

)

export default NotFoundPage
