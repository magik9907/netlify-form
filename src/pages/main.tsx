import React from "react"
import { useTitle } from "../hooks/useTitle"
import { useLanguageContext } from "../hooks/useLanguageContext"
import Layout from "../components/layout"
import { ContactForm } from "../components/form/contactForm"
import indexJson from '../data/index.json'
import './index.scss'

type propsType = {
  lang?: string
}

const Main = (props: propsType) => {
  const langContext = useLanguageContext()
  const title = useTitle()
  const lang = langContext.lang;

  return (
    <Layout title={indexJson.title[lang]}>
      <div>
        <section className="contact" id="contact">
          <h3>{indexJson.contactTitle[lang]}</h3>
          <div>
            <ContactForm method="POST" action='/success'></ContactForm>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Main
