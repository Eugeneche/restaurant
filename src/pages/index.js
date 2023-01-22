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
    
    <div className={styles.parallax}>
      <div className={styles.parallaxBackground}>
        <StaticImage 
          src="../images/wood-background.jpg"
          alt="background"
          layout="fullWidth"
          style={{minHeight: "600px"}}
        />
        <StaticImage 
          src="../images/outside_view.jpg"
          alt="background"
          layout="fullWidth"
          /* height={500} */
          style={{minHeight: "600px"}}
        />
        <StaticImage 
          src="../images/inside_view.jpg"
          alt="background"
          layout="fullWidth"
          /* height={500} */
          style={{minHeight: "600px"}}
        />
      </div>

      <div className={styles.parallaxContent}>
        <MainMenu />
      
        {/* <Layout> */}
        <Header />
        <div className={styles.container}>
          <h1>{main_page_title}</h1>
        </div>
        
        <section className={`${styles.contentBlock} ${styles.about}`}>
          <div className={styles.container}>
            <h2>{main_page_subtitle_1}</h2>
            <p>
              {about_text_1}
            </p>
          </div> 
        </section>

        <div className={styles.gap}></div>

        <section className={styles.contentBlock}>
          <div className={styles.container}>
            <h2>{main_page_subtitle_2}</h2>
            <div className={styles.offer}>
              <div className={styles.polygonBorger}>
                <StaticImage 
                  src="../images/meat.jpg"
                  alt="meat"
                  /* layout="constrained" */
                  /* height={500} */
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
            <h2>{reviews}</h2>
            <ReviewSlider />
          </div> 
        </section>

        {/* <div className={styles.gap}></div> */}
                 
        <Footer />
        {/* </Layout> */}
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
