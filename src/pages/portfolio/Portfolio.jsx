import React from 'react';
import "./Portfolio.css";
import PortfolioItem from "../../components/PortfolioItem";
import {portfolio} from "../../data";

// import {Link ,Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>
      {/* <nav className="projects__list">
      <Link to="/portfolio/notes"><img src={pokemon}/> Notes</Link>
<Link to="/portfolio/weather">Weather</Link>
<Link to="/portfolio/pwdGen">Password Generator</Link>
<Link to="/portfolio/pokemon">Pokemon</Link>
<Link to="/portfolio/quotes">Random Quotes</Link>
<Link to="/portfolio/quiz">Quiz</Link>
<Link to="/portfolio/crypto">Cryptocurrency</Link>
<Link to="/portfolio/todo">To-do</Link>
      </nav>
      <Outlet/> */}
      <div className="portfolio__container container grid">
       {portfolio.map((item)=>{
        return (
          <PortfolioItem key={item.id} {...item}/>
        )
       })}
      </div>
      
    </section>
  );
}

export default Portfolio;
