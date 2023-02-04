import React from "react"
import * as styles from "./_Header.module.scss"
import useTranslations from "../useTranslations"

const Header = () => {

    const { header_title } = useTranslations()

    return (
        <div className={styles.header}>
            <h1>{header_title}</h1>
        </div>
    )
}

export default Header