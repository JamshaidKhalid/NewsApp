import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://sportshub.cbsistatic.com/i/r/2022/04/06/f0431276-ea50-48a4-9ac7-a374cb7ca499/thumbnail/1200x675/cc6ce66b63998821c0057ff9a642594d/masters-leaderboard-2022-preview-g.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Continue Reading</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem