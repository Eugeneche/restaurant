import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const locale = React.useContext(LocaleContext)
  //console.log(locale)
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData?.edges?.map(item => {

    return {
      name: item?.node?.name,
      translations: item?.node?.childTranslationsJson,
    }
  })
  //console.log(simplified)
  // Only return translations for the current locale
  const { translations } = simplified?.filter(lang => {
    //console.log(lang?.name === locale)
    if (lang?.name === locale) return lang
  })[0]
  //console.log(translations)
  return translations
}

export default useTranslations

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          childTranslationsJson {
            menu
            about
            contacts
            main_page_title
            main_page_subtitle_1
            main_page_subtitle_2
            about_text_1
            about_text_2
            reviews
            your_name
            your_message
            your_phone
            your_email
            name
            phone
            email
            message
            send
          }
        }
      }
    }
  }
`
