import React, { Component } from 'react'

const API_KEY = 'd3eec465'

export class SearchForm extends Component {
  state = { inputMovie: '' }

  _handleChange = e => this.setState({ inputMovie: e.target.value })

  _handleSubmit = e => {
    e.preventDefault()
    const { inputMovie } = this.state
    let url = `http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const { Search = [], totalResults = "0"  } = res
        console.log({Search, totalResults})
        this.props.onResults(Search)
      })
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
              className="input" 
              type="text" 
              onChange={this._handleChange}
              placeholder="Movie to search..." />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}