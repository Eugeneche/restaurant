import * as React from "react"
import Seo from "../components/seo"
import * as styles from "../style/_pages.module.scss"
import Form from "../components/Form/Form"
import MainMenu from "../components/MainMenu/MainMenu"
import Footer from "../components/Footer/Footer"
import useTranslations from "../components/useTranslations"

const Contact = ({pageContext: { locale }}) => {

  const { contacts } = useTranslations()
  
  return (
    <div>
      <MainMenu />
      <div className={styles.gap}></div>
      <div className={styles.container}>
        <h1>{contacts}</h1>
        <Form />
        <div className={styles.map}>
        <iframe src="https://storage.googleapis.com/maps-solutions-44bciiyj83/commutes/zacl/commutes.html"
          width="100%" 
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
