import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import * as styles from "../style/_pages.module.scss"
import MainMenu from "../components/MainMenu/MainMenu"
import Footer from "../components/Footer/Footer"
import useTranslations from "../components/useTranslations"

const FoodMenu = ({pageContext: { locale }}) => {

  const { 
    menu
    } = useTranslations()

  //console.log(pageContext)

  const data = useStaticQuery(graphql`
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
  )
  const appetizers = data?.allMenuXlsxAppetizers?.nodes
  const mainDishes = data?.allMenuXlsxMainDishes?.nodes
  const deserts = data?.allMenuXlsxDeserts?.nodes
  //console.log(appetizers)
  
  return (
    <div className={styles.pagesWrapper}>
      <MainMenu />
      <div className={styles.gap}></div>
      <div className={styles.container}>
        <h1>{menu}</h1>

        <section className={styles.menuList}>
          <h2>{appetizers[0][locale]}</h2>
            {appetizers.map((dish, i) => {
              if (i === 0) {
                return
              } else {
                return (
                  <div key={i} className={styles.menuRow}>
                    <div className={styles.dishName}>
                      {dish[locale]}
                    </div>
                    <div className={styles.dishPrice}>
                      {dish.price}
                    </div>  
                  </div>
                )
              }
            }
          )}
        </section>

        <section className={styles.menuList}>
          <h2>{mainDishes[0][locale]}</h2>
            {mainDishes.map((dish, i) => {
              if (i === 0) {
                return
              } else {
                return (
                  <div key={i} className={styles.menuRow}>
                    <div className={styles.dishName}>
                      {dish[locale]}
                    </div>
                    <div className={styles.dishPrice}>
                      {dish.price}
                    </div>  
                  </div>
                )
              }
            }
          )}
        </section>

        <section className={styles.menuList}>
          <h2>{deserts[0][locale]}</h2>
            {deserts.map((dish, i) => {
              if (i === 0) {
                return
              } else {
                return (
                  <div key={i} className={styles.menuRow}>
                    <div className={styles.dishName}>
                      {dish[locale]}
                    </div>
                    <div className={styles.dishPrice}>
                      {dish.price}
                    </div>  
                  </div>
                )
              }
            }
          )}
        </section>
        
      </div> 
      <Footer />
    </div>

)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="J??deln?? l??stek" />

export default FoodMenu