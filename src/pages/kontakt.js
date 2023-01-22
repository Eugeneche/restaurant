import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

//import {Layout} from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"

const Contact = ({pageContext: { locale }}) => {

  const currentLocale = locale

  console.log(currentLocale)
  
  return (
    <div style={{overflowY: "scroll"}}>
    {/* <Layout> */}
      <div className={styles.container}>
        <Link to="/">Home</Link>
        <h1>Kontakt</h1>
        <section>
            <h2>PŘEDKRMY</h2>
            <div className={styles.menu}>
              <p>
              France and Poland have signed a deal for the sale of two French observation satellites to Poland, French Defense Minister Sebastien Lecornu tweeted on Tuesday.

"This major contract demonstrates Poland's trust in our technology and industry," Lecornu tweeted after meeting with his Polish counterpart in Warsaw.

The French minister went on to say this deal shows the “deep ties that unite France and Poland in the field of defense,” while emphasizing this it would create “500 jobs in France for five years.  

Poland’s Defense Minister Mariusz Błaszczak reiterated his French counterpart’s sentiment saying it was “an important day for the Polish Army.”

“This investment in state-of-the-art technology is a significant improvement in the capabilities of the Polish Armed Forces in the key area of reconnaissance data acquisition,” Błaszczak tweeted. 

Tuesday’s announcement comes six weeks after the country was hit by a "Russian-made" missile, causing an explosion outside the rural eastern Polish village of Przewodow, about four miles (6.4 kilometers) west of the Ukrainian border, killing two farmers. 

At the time of the event, Poland’s ambassador to the United Nations Krzysztof Szczerski said the incident “teaches us how close we actually live the potential escalation in the spillover of Russia’s war of aggression against Ukraine of far-reaching consequences that we all can perceive.”
France and Poland have signed a deal for the sale of two French observation satellites to Poland, French Defense Minister Sebastien Lecornu tweeted on Tuesday.

"This major contract demonstrates Poland's trust in our technology and industry," Lecornu tweeted after meeting with his Polish counterpart in Warsaw.

The French minister went on to say this deal shows the “deep ties that unite France and Poland in the field of defense,” while emphasizing this it would create “500 jobs in France for five years.  

Poland’s Defense Minister Mariusz Błaszczak reiterated his French counterpart’s sentiment saying it was “an important day for the Polish Army.”

“This investment in state-of-the-art technology is a significant improvement in the capabilities of the Polish Armed Forces in the key area of reconnaissance data acquisition,” Błaszczak tweeted. 

Tuesday’s announcement comes six weeks after the country was hit by a "Russian-made" missile, causing an explosion outside the rural eastern Polish village of Przewodow, about four miles (6.4 kilometers) west of the Ukrainian border, killing two farmers. 

At the time of the event, Poland’s ambassador to the United Nations Krzysztof Szczerski said the incident “teaches us how close we actually live the potential escalation in the spillover of Russia’s war of aggression against Ukraine of far-reaching consequences that we all can perceive.”
France and Poland have signed a deal for the sale of two French observation satellites to Poland, French Defense Minister Sebastien Lecornu tweeted on Tuesday.

"This major contract demonstrates Poland's trust in our technology and industry," Lecornu tweeted after meeting with his Polish counterpart in Warsaw.

The French minister went on to say this deal shows the “deep ties that unite France and Poland in the field of defense,” while emphasizing this it would create “500 jobs in France for five years.  

Poland’s Defense Minister Mariusz Błaszczak reiterated his French counterpart’s sentiment saying it was “an important day for the Polish Army.”

“This investment in state-of-the-art technology is a significant improvement in the capabilities of the Polish Armed Forces in the key area of reconnaissance data acquisition,” Błaszczak tweeted. 

Tuesday’s announcement comes six weeks after the country was hit by a "Russian-made" missile, causing an explosion outside the rural eastern Polish village of Przewodow, about four miles (6.4 kilometers) west of the Ukrainian border, killing two farmers. 

At the time of the event, Poland’s ambassador to the United Nations Krzysztof Szczerski said the incident “teaches us how close we actually live the potential escalation in the spillover of Russia’s war of aggression against Ukraine of far-reaching consequences that we all can perceive.”
              </p>
            </div>
          </section>
      </div>    
    {/* </Layout> */}
    </div>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Kontakt" />

export default Contact
