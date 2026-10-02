import "./GetInTouch.css"
import { useState } from 'react'
import { FaEnvelope, FaPhone } from "react-icons/fa"

// The contact details shown in the box
const email = "biswasanubhav921@gmail.com"
const phone = "+91 9599234626"

const GetInTouch = () => {
  // is the box with the email and number open?
  const [open, setOpen] = useState(false);

  return (
    <div className="get-in-touch" id="contact">
        <button className="btn" onClick={() => setOpen(!open)}>
            {open ? "Hide contact details" : "Get in touch"}
        </button>

        {open && (
            <div className="contact-details">
                <p>
                    <FaEnvelope/> {email}
                </p>
                <p>
                    <FaPhone/> {phone}
                </p>
            </div>
        )}
    </div>
  )
}

export default GetInTouch
