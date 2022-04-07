import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>

        <div className='row'>
          <div className='col-md-4'>
            <NewsItem title="News Title" description="News Description..." imageUrl="https://sportshub.cbsistatic.com/i/r/2022/04/06/f0431276-ea50-48a4-9ac7-a374cb7ca499/thumbnail/1200x675/cc6ce66b63998821c0057ff9a642594d/masters-leaderboard-2022-preview-g.jpg" />
          </div>

          <div className='col-md-4'>
            <NewsItem title="News Title" description="News Description..." />
          </div>

          <div className='col-md-4'>
            <NewsItem title="News Title" description="News Description..." />
          </div>
        </div>

      </div>
    )
  }
}

export default News