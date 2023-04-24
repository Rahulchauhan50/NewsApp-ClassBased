import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
        }
    }
    async componentDidMount(){ 
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${this.state.articles.page}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.setState({articles: respone.articles, page : 1, results : respone.totalResults-6})
            console.log(respone.totalResults)
        })
    }
    HandleOnPrev = async () => {
        console.log("prev")
        console.log("next")
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${this.state.page-1}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.setState({articles: respone.articles, page : this.state.page-1})
        })
    }
    HandleOnNext = async () => {
        console.log(this.state.articles)
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${(this.state.page)+1}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.setState({articles: respone.articles, page : this.state.page+1, results : this.state.results-6})
            console.log(this.state.results-6)
        })

    }
   
  render() {
    
    return (
        <>
      <div className='container'>
      <div className='row'>
      {(this.state.articles).map((elements)=>{
        return <div className='my-3 col-md-4' key={elements.url}>
                <Newsitems title={elements.title.slice(0,80)} despription={elements.description>130?elements.description.slice(0,130):elements.description} imageurl={elements.urlToImage} newurl={elements.url}/>
            </div>
      })}
      </div>
      </div>
      <div className='row'>
      <div onClick={this.HandleOnPrev} className={`col-md-1 mx-auto btn btn-primary ${this.state.page<2?"disabled":""}`}>&larr; Preious</div>
      <div  onClick={this.HandleOnNext} className={`col-md-1 mx-auto btn btn-primary ${this.state.results<1?"disabled":""}`}>Next &rarr;</div>
    </div>
    </>
    )
  }
}

export default News