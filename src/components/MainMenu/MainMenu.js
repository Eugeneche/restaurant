import React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_MainMenu.module.scss"
import Navigation from "../navigation"
import LocalizedLink from "../localizedLink"
import useTranslations from "../useTranslations"


//import logo from "../../images/logo.png"

const MainMenu = () => {

    const { menu,
            about,
            contacts
            } = useTranslations()

    return (
        <>
            <div className={styles.menuContainer}>
                <div className={styles.logo}>
                    <LocalizedLink to="/">
                        <StaticImage src="../../images/logo.png" alt="restaurace logo" />
                    </LocalizedLink>
                </div>
                <div className={styles.pages}>
                    <LocalizedLink to="/o-nas">{about}</LocalizedLink>
                    <LocalizedLink to="/jidelni-listek">{menu}</LocalizedLink>
                    <LocalizedLink to="/kontakt">{contacts}</LocalizedLink>
                </div>
                <Navigation />
            </div>
        </>
    )
}

export default MainMenu