import React from 'react'
import Header from './Header'
import ContactBtn from './ContactBtn'

function Contact() {
  return (
    <>

    <div className="email container">
        <h2>Email:</h2>
        <p>aadarshraj06062001@gmail.com</p>
    </div>
    <div className="video-call-container">
        <h2>Schedule Video Call With Me:</h2>
        <img src="" alt="" />
    </div>
    <div className="Social-container">

    </div>
    <div className="Support-container">
        <h2>Support My Work:</h2>
        <p>
        Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.
        </p>
    </div>
    <div className="contact-btn-container">
        <ContactBtn />
        <ContactBtn />
        <ContactBtn />
    </div>
    </>
  )
}

export default Contact
