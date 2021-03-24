import React, { Component } from 'react';
import PortfolioCard from '../Components/PortfolioCard';
import PortfolioData from '../portfolio';





class Portfolio extends Component {
  state = {
    PortfolioData,
  };

  render() {
    return (
      <div>
        <h3>Portfolio Cards</h3>
        {this.state.PortfolioData.map((portfolio) => (
          <PortfolioCard
            id={portfolio.id}
            key={portfolio.id}
            title={portfolio.title}
            image={portfolio.image.default}
            github_repo={portfolio.github_repo}
            deployed_link={portfolio.deployed_link}
          />
        ))}
      </div>
    );
  }
}
export default Portfolio;
