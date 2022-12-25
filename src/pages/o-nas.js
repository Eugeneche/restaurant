import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"

const About = () => {
  
  return (
    <Layout>
      <div className={styles.container}>
      <Link to="/">Home</Link>
        <h1>O nas</h1>

      </div>    
    </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="O nas" />

export default About
