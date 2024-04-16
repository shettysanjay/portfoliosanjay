import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  
  FaLinkedin
} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel welcome to get in touch!</h3>
          <p className="contact__description">
          Feel welcome to reach out. I'm enthusiastic about exploring new projects and ideas.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me: </span>
                <h4 className="info__desc"><a href="mailto:sanjay.shetty.mys@gmail.com">sanjay.shetty.mys@gmail.com</a></h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me </span>
                <h4 className="info__desc">+91 8747087847</h4>
              </div>
            </div>
            <div className="contact__socials">
            <a href="https://github.com/shettysanjay" className="contact__social-links" target="_blank"><AiFillGithub className="item__icon"/></a>
            <a href="https://www.linkedin.com/in/sanjay-shetty-6191a12a9/" className="contact__social-links" target="_blank"><FaLinkedin className="item__icon"/></a>
          </div>
          </div>
         
        </div>  
        {/* <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder="Your Name" className="form__control"/>
            </div>
            <div className="form__input-div">
              <input type="email" placeholder="Your Email" className="form__control"/>
            </div>
            <div className="form__input-div">
              <input type="text" placeholder="Your Subject" className="form__control"/>
            </div>
            <div className="form__input-div">
              <textarea  placeholder="Your Message" className="form__control textarea"></textarea>
            </div>
            
          </div>
          <button className="button">Send Message <span className="button__icon contact__button-icon"><FiSend/></span></button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
