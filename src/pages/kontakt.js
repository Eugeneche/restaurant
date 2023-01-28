import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

//import {Layout} from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import { Form } from "../components/Form/Form"

const Contact = ({pageContext: { locale }}) => {

  const currentLocale = locale

  console.log(currentLocale)
  
  return (
    <div style={{overflowY: "scroll"}}>
    {/* <Layout> */}
      <div className={styles.container}>
        <Link to="/">Home</Link>
        <h1>Kontakt</h1>
        <Form />
      </div>    
    {/* </Layout> */}
    </div>
)}

export const Head = () => <Seo title="Kontakt" />

export default Contact
