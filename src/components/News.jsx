import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './spinner'

export class News extends Component {

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            laoding : true,
            Category : props.category,
            Country : localStorage.getItem("Country") === null?"in": localStorage.getItem("Country")
        }
        console.log(this.state.Country)
        this.update(this.state.articles.page);
    }
    async update(PageNo){
        this.props.progress(10)
        this.setState({laoding: true})
        await fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.Country}&category=${this.state.Category}&apiKey=1e0a9b492d664dd1b3751ee483316063&pageSize=6&page=${PageNo}`)
        .then((data)=>{
            return data.json()
        })
        .then((respone)=>{
            this.props.progress(70)
            this.setState({
                articles: respone.articles, 
                page : 1, 
                results : respone.totalResults-6,
                laoding: false,
            })
        })
        this.props.progress(100)
    }
    HandleOnPrev = async (props) => {
        this.update(this.state.page-1,props)
        this.setState({page : this.state.page-1, results : this.state.results+6,})
    }
    HandleOnNext = async (props) => {
        this.update((this.state.page,props)+1)
        this.setState({page : this.state.page+1, results : this.state.results-6,})
    }
   
  render(props) {
    let {mode} = this.props;
    
    return (
        <>
      <div className='container' id='up'>
        {this.state.laoding && <Spinner/>}
      <div className='row'>
      {!this.state.laoding && (this.state.articles).map(Elements=>{
        return <div className={`my-3 col-md-4`} key={Elements.url}>
                <Newsitems source={Elements.source.name} author={Elements.author} time={Elements.publishedAt} mode={mode} title={Elements.title} despription={Elements.description>130?Elements.description.slice(0,130):Elements.description} imageurl={Elements.urlToImage} newurl={Elements.url}/>
            </div>
      })}
      </div>
      </div>
      <div className='flex-row d-flex justify-content-center my-3'>
      <div onClick={this.HandleOnPrev} className={`col-md-1 mx-auto btn btn-${mode === "dark"?"dark":"primary"} ${this.state.page<2?"disabled":""}`}><a className='link-light' style={{textDecoration:"none"}} href='#up'>&larr; Previous</a></div>
      
      <div className='col-4'>
      </div>
      
      <div onClick={this.HandleOnNext} className={`col-md-1 mx-auto btn btn-${mode === "dark"?"dark":"primary"} ${this.state.results<1?"disabled":""}`} ><a className='link-light' style={{textDecoration:"none"}} href='#up'>Next &rarr;</a></div>
    </div>
    </>
    )
  }
}

export default News