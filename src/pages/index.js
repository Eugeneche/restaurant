import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import MainMenu from "../components/MainMenu/MainMenu"
import Header from "../components/Header/Header"

const IndexPage = () => {
  
  return (
    
    <div className={styles.parallax}>
      <div className={styles.parallaxBackground}>
          <StaticImage 
            src="../images/wood-background.jpg"
            alt="background"
            layout="fullWidth"
            /* height={500} */
            style={{minHeight: "950px", maxHeight: "1000px"}}
          />
                    <StaticImage 
            src="../images/outside_view.jpg"
            alt="background"
            layout="fullWidth"
            /* height={500} */
            style={{minHeight: "33.33333%", maxHeight: "850px"}}
          />
                    <StaticImage 
            src="../images/inside_view.jpg"
            alt="background"
            layout="fullWidth"
            /* height={500} */
            style={{minHeight: "33.33333%", maxHeight: "850px"}}
          />
        </div>
        <div className={styles.parallaxContent}>
      <MainMenu />
      <Header />
      <Layout>
        

        
          <section>
            <div className={styles.container}>
              <p>
              Styly jsou doménou především Wordu, v PowerPointu jde o přednastavená rozložení snímků. Styly nesou informace o velikosti a barvě písma pro různé části dokumentu. Velmi jednoduchý dokument by v zásadě mohl mít jen několik stylů, a to běžný text – ve Wordu standardně označován jako Normální – a nadpisy první úrovně, druhé úrovně atd. – standardní označení stylů je Nadpis 1, Nadpis 2 atd., názvy stylů lze ovšem měnit.
              </p>
            </div> 
          </section>
          <div className={styles.gap}></div>
          <section>
            <div className={styles.container}>
              <p>
              Styly jsou doménou především Wordu, v PowerPointu jde o přednastavená rozložení snímků. Styly nesou informace o velikosti a barvě písma pro různé části dokumentu. Velmi jednoduchý dokument by v zásadě mohl mít jen několik stylů, a to běžný text – ve Wordu standardně označován jako Normální – a nadpisy první úrovně, druhé úrovně atd. – standardní označení stylů je Nadpis 1, Nadpis 2 atd., názvy stylů lze ovšem měnit.
              </p>
            </div> 
          </section>
          <div className={styles.gap}></div>
          <section>
            <div className={styles.container}>
              <h2>Recenze</h2>
              <p>
              Styly jsou doménou především Wordu, v PowerPointu jde o přednastavená rozložení snímků. Styly nesou informace o velikosti a barvě písma pro různé části dokumentu. Velmi jednoduchý dokument by v zásadě mohl mít jen několik stylů, a to běžný text – ve Wordu standardně označován jako Normální – a nadpisy první úrovně, druhé úrovně atd. – standardní označení stylů je Nadpis 1, Nadpis 2 atd., názvy stylů lze ovšem měnit.
              </p>
            </div> 
          </section>
          <div className={styles.gap}></div>
        

           
      </Layout>
      </div>
      </div>
    
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
