import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const Form = () => {
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
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Phone</label>
        <input type="tel" id="user_phone" name="user_phone" required></input>
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
    </form>
  )
}