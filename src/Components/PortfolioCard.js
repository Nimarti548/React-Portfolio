import React from 'react'

const PortfolioCard = (props) => {
    return (
      <div className="card">
        <div className="img-fluid">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>
                <a className="link" href={props.deployed_link} target="_blank">
                  Deployed Link
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a className="link" href={props.github_repo} target="_blank">
                  GitHub Repo
                </a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default PortfolioCard
