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
        await fetch(`https://newapi.org/v2/top-headlines?country=in&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${this.state.articles.page}`)
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
            this.setState({articles: respone.articles, page : this.state.page-1, results : this.state.results+6})
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
   
  render(props) {
    let {mode} = this.props
    
    return (
        <>
        <span className="loader"></span>
      <div className='container'>
        <h3 className={`text-${mode==="dark"?"light":"dark"} my-3`}>Breaking News at Your Fingertips: Download the QuickNews App and Stay Informed Anytime, Anywhere</h3>
      <div className='row'>
      {(this.state.articles).map((elements)=>{
        return <div className={`my-3 col-md-4`} key={elements.url}>
                <Newsitems mode={mode} title={elements.title.slice(0,80)} despription={elements.description>130?elements.description.slice(0,130):elements.description} imageurl={elements.urlToImage} newurl={elements.url}/>
            </div>
      })}
      </div>
      </div>
      <div className='flex-row d-flex justify-content-center my-3'>
      <div className={`col-md-1 btn btn-${mode === "dark"?"dark":"primary"} ${this.state.page<2?"disabled":""}`} >&larr; Preious</div>
      
      <div className='col-4'></div>
      
      <div className={`col-md-1 btn btn-${mode === "dark"?"dark":"primary"} ${this.state.page<2?"disabled":""}`} >Next &rarr;</div>
    </div>
    </>
    )
  }
}

export default News