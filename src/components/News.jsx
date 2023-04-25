import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './spinner'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [{}],
            laoding : true,
            Category : "general",
            Country : "in"
        }
    }
    async componentDidMount(){
        this.setState({laoding: true})
        await fetch(`https://newapi.org/v2/top-headlines?country=${this.state.Country}&category=${this.state.Category}&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${this.state.articles.page}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.setState({articles: respone.articles, page : 1, results : respone.totalResults-6,laoding: false})
        })
    }
    HandleOnPrev = async () => {
        this.setState({laoding: true})
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${this.state.page-1}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.setState({articles: respone.articles, page : this.state.page-1, results : this.state.results+6,laoding: false})
        })
    }
    HandleOnNext = async () => {
        this.setState({laoding: true})
        console.log(this.state.articles)
        await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${(this.state.page)+1}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.setState({articles: respone.articles, page : this.state.page+1, results : this.state.results-6,laoding: false})
            console.log(this.state.results-6)
        })

    }
   
  render(props) {
    let {mode} = this.props
    
    return (
        <>
      <div className='container' id='up'>
        <h3 className={`text-${mode==="dark"?"light":"dark"} my-3`}>Breaking News at Your Fingertips: Download the QuickNews App and Stay Informed Anytime, Anywhere</h3>
        {this.state.laoding && <Spinner/>}
      <div className='row'>
      {!this.state.laoding && (this.state.articles).map((elements)=>{
        return <div className={`my-3 col-md-4`} key={elements.url}>
                <Newsitems mode={mode} title={elements.title} despription={elements.description>130?elements.description.slice(0,130):elements.description} imageurl={elements.urlToImage} newurl={elements.url}/>
            </div>
      })}
      </div>
      </div>
      <div className='flex-row d-flex justify-content-center my-3'>
      <div onClick={this.HandleOnPrev} className={`col-md-1 mx-auto btn btn-${mode === "dark"?"dark":"primary"} ${this.state.page<2?"disabled":""}`}><a className='link-light' style={{textDecoration:"none"}} href='#up'>&larr; Previous</a></div>
      
      <div className='col-4'></div>
      
      <div onClick={this.HandleOnNext} className={`col-md-1 mx-auto btn btn-${mode === "dark"?"dark":"primary"} ${this.state.results<1?"disabled":""}`} ><a className='link-light' style={{textDecoration:"none"}} href='#up'>Next &rarr;</a></div>
    </div>
    </>
    )
  }
}

export default News