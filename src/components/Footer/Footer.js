import React from "react"
import * as styles from "./_Footer.module.scss"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()}
        </footer>
    )

}

export default Footer