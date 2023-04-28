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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5628868603135!2d14.532462900413494!3d50.057019210713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b928ad03c82e5%3A0x9906f3694b835073!2sV%20Nov%C3%A9%20%C4%8Dtvrti%20431%2F33%2C%20102%2000%20Praha%2015-Hostiva%C5%99!5e0!3m2!1sru!2scz!4v1682712325533!5m2!1sru!2scz" title="myFrame" style={{border:0, height: "600px", width:"100%", marginBottom: "50px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5628868603135!2d14.532462900413494!3d50.057019210713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b928ad03c82e5%3A0x9906f3694b835073!2sV%20Nov%C3%A9%20%C4%8Dtvrti%20431%2F33%2C%20102%2000%20Praha%2015-Hostiva%C5%99!5e0!3m2!1sru!2scz!4v1682712325533!5m2!1sru!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
{/*         <iframe src="https://storage.googleapis.com/maps-solutions-44bciiyj83/commutes/zacl/commutes.html"
          width="100%" 
          style={{border: 0, height: "100vh"}}
          loading="lazy">
        </iframe> */}
        
        </div>
      </div>    
      <Footer />
    </div>
)}

export const Head = () => <Seo title="Kontakt" />

export default Contact
