import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import useTranslations from "../useTranslations"
import * as styles from "./_Form.module.scss"

const Form = () => {

    const { 
        your_name,
        your_message,
        your_phone,
        your_email,
        name,
        phone,
        email,
        message,
        send
        } = useTranslations()

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm('service_l8cr82m', 'template_waaavkq', form.current, 'user_FAY8OHLTh9HWuUBjXK68o')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.fields}>
            <label>{name}</label>
            <input type="text" name="user_name" placeholder={your_name} required />
{/*         </div>
        <div className={styles.field}> */}
            <label>{phone}</label>
            <input type="tel" id="user_phone" name="user_phone" placeholder={your_phone} required></input>
{/*         </div>
        <div className={styles.field}> */}
            <label>{email}</label>
            <input type="email" name="user_email" placeholder={your_email} required />
{/*         </div>
        <div className={styles.field}> */}
            <label>{message}</label>
            <textarea name="message" placeholder={your_message} required />
        </div>
        <div className={styles.submit}>
            <input type="submit" value={send} />
        </div>

    </form>
    )
}

export default Form