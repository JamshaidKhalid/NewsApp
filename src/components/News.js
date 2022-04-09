import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=236b2c5df73a4507990536033f2ceb33&page=${this.state.page}&pagesize=24`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }


  handlePrevClick = async () => {
    console.log("Prev Clicked");

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=236b2c5df73a4507990536033f2ceb33&page=${this.state.page - 1}&pagesize=24`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }

  handleNextClick = async () => {
    console.log("Next Clicked");



    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=236b2c5df73a4507990536033f2ceb33&page=${this.state.page + 1}&pagesize=24`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    });


  }

  render() {
    return (
      <div className='container mt-3'>
        <h2>Top Headlines</h2>
        <h2>Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!(this.state.loading) && this.state.articles.map((element) => {

            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 58) : ""} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : "https://www.team-bhp.com/sites/default/files/styles/large/public/03%20L%20to%20R%20-%20Refreshed%20Sonet%20Seltos.jpg"} />
            </div>
          })}
        </div>

        <div className='container d-flex justify-content-between fixed-bottom mb-2'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / 24))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News