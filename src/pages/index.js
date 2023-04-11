import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import {Layout} from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_index.module.scss"
import MainMenu from "../components/MainMenu/MainMenu"
import Header from "../components/Header/Header"
import ReviewSlider from "../components/Sliders/ReviewSlider"
import Footer from "../components/Footer/Footer"
import useTranslations from "../components/useTranslations"
//import transparent from "../images/transparent_2.png" 

const IndexPage = () => {
  
  const { 
    main_page_title,
    about_text_1,
    about_text_2,
    main_page_subtitle_1,
    main_page_subtitle_2,
    reviews
    } = useTranslations()

  return (
  <div className={styles.indexWrapper}>
    <MainMenu />
    <div className={styles.parallax}>
      

      <div className={styles.parallaxBackground}>
        <StaticImage 
          src="../images/fasade.jpg"
          alt="background"
          layout="fullWidth"
          /* height={600} */
          style={{minHeight: "600px"}}
        />
        <StaticImage 
          src="../images/outside.jpg"
          alt="background"
          layout="fullWidth"
          style={{minHeight: "calc(600px + 6vh)"}}
        />
        <StaticImage 
          src="../images/interior.jpg"
          alt="background"
          layout="fullWidth"
          style={{minHeight: "600px"}}
        />
      </div>

      <div className={styles.parallaxContent}>

        <Header />

        <section className={styles.contentBlock}>
          <div className={`${styles.container} ${styles.about}`}>
            <h2>{main_page_title}</h2>
            <h3>{main_page_subtitle_1}</h3>
            <p>
              {about_text_1}
            </p>
            <StaticImage 
              src="../images/dish_1.jpg"
              alt="meat"
              layout="fixed"
              style={{alignSelf: "center"}}
              width={200}
            />
          </div> 
        </section>

        <div className={styles.gap}></div>

        <section className={styles.contentBlock}>
          <div className={styles.container}>
            <h3>{main_page_subtitle_2}</h3>
            <div className={styles.offer}>
              <div className={styles.polygonBorger}>
                <StaticImage 
                  src="../images/meat.jpg"
                  alt="meat"
                  style={{height: "100%"}}
                />
              </div>
              <div className={styles.polygonBorger}>
                <div className={styles.polygonBackground}>
                  <p>
                    {about_text_2}
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </section>

        <div className={styles.gap}></div>

        <section className={styles.contentBlock}>
          <div className={`${styles.container} ${styles.reviewBlock}`}>
            <h3>{reviews}</h3>
            <ReviewSlider />
          </div> 
        </section>
                 
        <Footer />

      </div>
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
