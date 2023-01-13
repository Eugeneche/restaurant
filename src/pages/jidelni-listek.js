import * as React from "react"
import { graphql } from "gatsby"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import MainMenu from "../components/MainMenu/MainMenu"
//import Table from "../components/Table/Table"

const FoodMenu = () => {

  const appetizers = query.allMenuXlsxAppetizers.nodes
  const mainDishes = query.allMenuXlsxMainDishes.nodes
  const deserts = query.allMenuXlsxDeserts.nodes
  
  return (
    <div style={{overflowY: "scroll"}}>
     
      <Layout> 
        <MainMenu />
        <div className={styles.container}>
          <h1>Jídelní lístek</h1>

          <section>
            <h2>PŘEDKRMY</h2>
            <div className={styles.menu}>
              {/* <Table /> */}
              <div className={styles.menuColumn}>
                <div className={styles.dishName}>

                </div>
                <div className={styles.dishPrice}>

                </div>
              </div>
              <div className={styles.menuColumn}>
                <div className={styles.dishName}>

                </div>
                <div className={styles.dishPrice}>

                </div>
              </div>
            </div>
          </section>
        </div> 
      </Layout>
    </div>

)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Jídelní lístek" />

export default FoodMenu

export const query = graphql`
query getMenu {
  allMenuXlsxAppetizers {
    nodes {
      cs
      en
      price
      ru
    }
  }
  allMenuXlsxDeserts {
    nodes {
      cs
      en
      price
      ru
    }
  }
  allMenuXlsxMainDishes {
    nodes {
      cs
      en
      price
      ru
    }
  }
}
`
