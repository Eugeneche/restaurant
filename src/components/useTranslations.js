import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const locale = React.useContext(LocaleContext)
  console.log(locale)
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData?.edges?.map(item => {

    return {
      name: item?.node?.name,
      translations: item?.node?.childTranslationsJson,
    }
  })
  //console.log(simplified.filter(lang => lang.name === locale)[0])
  // Only return translations for the current locale
  const { translations } = simplified?.filter(lang => {
    console.log(lang.name)
    return lang?.name === locale
  })[0]

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
            home
            main_page_title
            main_page_subtitle_1
            main_page_subtitle_2
            about_text_1
            about_text_2
            reviews
          }
        }
      }
    }
  }
`
