import React from "react"
import { Link } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
//import LocalizedLink from "./localizedLink"
//import useTranslations from "./useTranslations"

const LanguagesSwitcher = () => {

  return (
    <nav className={styles.languagesSwitcher}>
      <Link to="/" hrefLang="ru">
        Čeština
      </Link>
      {` `}|{` `}
      <Link to="/en" hrefLang="en">
        English
      </Link>
      {` `}|{` `}
      <Link to="/ru" hrefLang="ru">
        Русский
      </Link>
    </nav>
  )
}

export default LanguagesSwitcher
