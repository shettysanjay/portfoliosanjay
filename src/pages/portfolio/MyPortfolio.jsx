import React from 'react';
import "./Portfolio.css";
import MyPortfolioItem from "../../components/MyPortfolioItem";
import {portfolio} from "../../data";


const MyPortfolio = () => {
    
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span> Projects</h2>
      <div className="portfolio__container container grid">
       {portfolio.map((item)=>{
        return (
          <MyPortfolioItem key={item.id} {...item}/>
        )
       })}
      </div>
      
      
    </section>
  );
}

export default MyPortfolio;
