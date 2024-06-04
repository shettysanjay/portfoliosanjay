import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sanjay Shetty</span>, a Software Developer
          </h1>
          <p className="home__description">
            I'm a full stack developer focused on crafting clean and user
            friendly experiences. Dedicated and skilled JavaScript developer with 2+ years of professional
            experience in frontend development using React.js 
            <br />
            And 7 months
            of experience in backend development 
            I possess foundational knowledge and partial proficiency in Node.js,
             with the ability to create basic applications and understand key concepts.
            <br /><br />
             I have completed comprehensive training in Docker, Git, Github,Kubernetes, Jenkins & AWS 
            equipping me with a solid understanding of their principles and functionalities.
             While I haven't yet applied this knowledge in practical projects, I am eager 
             to leverage my skills to contribute effectively in relevant environments.
          </p>
          <Link to="/about" className="button">More About Me <span className="button__icon"><FaArrowRight/></span></Link>
        </div>
      </div>
      <div className="color__block">
        
      </div>
    </section>
  );
};

export default Home;
