import "./Form.css"

import React from 'react'

const Form = () => {
  // stop the page from reloading when the form is submitted
  // TODO: send the message somewhere (e.g. Formspree or EmailJS)
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required></input>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required></input>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject"></input>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Type your message here" required/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
