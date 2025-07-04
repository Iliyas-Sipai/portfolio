import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import github_icon from '../../assets/github-icon-1.png'
import linkedin_icon from '../../assets/linkedin-icon-1.png'



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
// enter your own web3 forms access key below
    formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxx");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
      alert(res.message);
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><a href='iliyassipai861@gmail.com' target="_blank" className="linkedin-link" ><p>iliyassipai861@gmail.com</p></a> 
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91 9316198853</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Agol,India</p>
                </div>
                <div className="contact-detail ">
                    <img src={linkedin_icon} className='social-icon' /><a href='https://www.linkedin.com/in/iliyas-sipai-dev/' target="_blank" className="linkedin-link" ><p > LinkedIn</p></a>
                </div>
                <div className="contact-detail">
                    <img src={github_icon} style={{width:'28px'}} className='social-icon' /><a href='https://github.com/Iliyas-Sipai' target="_blank" className="linkedin-link" ><p > GitHub Profile</p></a>
                </div>
            </div>
        </div>  
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
