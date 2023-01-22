import React from "react"
import { Link } from "gatsby"
//import LocalizedLink from "./localizedLink"
//import useTranslations from "./useTranslations"

const LanguagesSwitcher = () => {

  return (
    <nav>
      <div>
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
      </div>
    </nav>
  )
}

export default LanguagesSwitcher
