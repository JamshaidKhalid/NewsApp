import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=236b2c5df73a4507990536033f2ceb33";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });
  }


  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>

        <div className='row'>
          {this.state.articles.map((element) => {
            
            return <div className='col-md-4'>
              <NewsItem title={element.title?element.title.slice(0, 35):""} description={element.description?element.description.slice(0, 58):""} imageUrl={element.urlToImage?element.urlToImage:"https://www.team-bhp.com/sites/default/files/styles/large/public/03%20L%20to%20R%20-%20Refreshed%20Sonet%20Seltos.jpg"} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News