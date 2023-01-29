import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

//import {Layout} from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_pages.module.scss"
import Form from "../components/Form/Form"
import MainMenu from "../components/MainMenu/MainMenu"
import Footer from "../components/Footer/Footer"
import useTranslations from "../components/useTranslations"

const Contact = ({pageContext: { locale }}) => {

  const { contacts } = useTranslations()

  const currentLocale = locale

  console.log(currentLocale)
  
  return (
    <div className={styles.pagesWrapper}>
      <MainMenu />
      <div className={styles.gap}></div>
      <div className={styles.container}>
        <h1>{contacts}</h1>
        <Form />
        <div className={styles.map}>
          <iframe src="https://storage.googleapis.com/maps-solutions-44bciiyj83/locator-plus/ckur/locator-plus.html"
            width="100%" 
            /* height="50vh" */
            style={{border: 0, height: "100vh"}}
            loading="lazy">
          </iframe>
        </div>
      </div>    
      <Footer />
    </div>
)}

export const Head = () => <Seo title="Kontakt" />

export default Contact
