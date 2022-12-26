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
      <Header />
      <Layout>
        

        
          <section className={`${styles.contentBlock} ${styles.about}`}>
            <div className={styles.container}>
              <h2>Kdo jsme</h2>
              <p>
              Velkorysý prostor restaurace nabízí své služby 90 hostům a je přístupný dvěma bezbariérovými vstupy přímo z chodníku. Interiér zdobí osm nádherných segmentových valených kleneb, pět masivních žulových sloupů, kované lustry, masivní dubový nábytek doplněný o umělecké kovářské prvky. Prostoru restaurace dominuje nejen unikátní umělecké dílo v podobě rozměrných ručně kovaných hodin. Ale nenapodobitelnou atmosféru restaurace dokreslují repliky čtyř unikátních přístrojů slavných alchymistů z dob císaře Rudolfa II. Jedinečnost restaurace podtrhují první a jediné interiérové sluneční hodiny na světě!!! Stylová vinárna se nachází v suterénu a nabízí příjemné posezení 60 hostům. Dobový ráz, četné umělecké prvky a přístup denního světla zajímavě technicky řešeným pochozím oknem, vytváří ideální prostředí pro klidnou večeři či posezení u skleničky vína. Vinárna je stejně jako restaurace vybavena špičkovým vzduchotechnickým a klimatizačním systémem a vytápěnou podlahou. Na objednávku lze využít služeb obsluhované vyhlídkové terasy, ze které je fantastický výhled na celou historickou část Prahy. Hypermoderní kuchyňský provoz je srdcem restaurace a pro naše hosty vytváří hotová i minutková jídla v té nejvyšší kvalitě. Jako jedna z mála, má restaurace U Špirků denně obměňovaný sortiment hotových jídel a poledních menu za velmi výhodné ceny. Pracovní tým restaurace U Špirků je přesvědčený o tom, že dnes stejně jako před více než stočtyřiceti lety platí, že nejvýhodnější klasické stravování v centru Teplice je v restauraci Nostalgie. Budeme velice rádi, když se sami přijdete přesvědčit.
              </p>
            </div> 
          </section>

          <div className={styles.gap}></div>

          <section className={styles.contentBlock}>
            <div className={styles.container}>
            <h2>Jen gril a dřevěné uhlí</h2>
            <div className={styles.twoColumns}>
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
                    Grilujeme na otevřeném ohni tradičním jihoamerickým způsobem. Maso napíchnuté na špízu má díky tomu příjemně kouřovou chuť a uchovává si svou šťavnatost.
                  </p>
                </div>
              </div>
              
 
            </div>

            </div> 
          </section>

          <div className={styles.gap}></div>

          <section className={styles.contentBlock}>
            <div className={styles.container}>
              <h2>Recenze</h2>
              <p>
              Styly jsou doménou především Wordu, v PowerPointu jde o přednastavená rozložení snímků. Styly nesou informace o velikosti a barvě písma pro různé části dokumentu. Velmi jednoduchý dokument by v zásadě mohl mít jen několik stylů, a to běžný text - ve Wordu standardně označován jako Normální - a nadpisy první úrovně, druhé úrovně atd. - standardní označení stylů je Nadpis 1, Nadpis 2 atd., názvy stylů lze ovšem měnit.
              </p>
            </div> 
          </section>

          {/* <div className={styles.gap}></div> */}
        

           
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
