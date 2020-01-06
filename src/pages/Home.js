import React, { Component } from 'react'
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MovieList } from '../components/MoviesList'

export class Home extends Component {
  state = { usedSearch: false, result: [] }

  _handleResults = result => this.setState({ result, usedSearch: true })

  _renderResult = () => {
    return this.state.result.length == 0
    ? <p> Sorry! 😔 results not found!</p>
    : <MovieList movies={this.state.result} />
  }

  render(){
    return (
      <div>
         <Title> Search movies </Title>
        <div className="searchForm-wrapper">
          <SearchForm 
            onResults={this._handleResults}
          />
        </div>
        {
          this.state.usedSearch 
          ? this._renderResult()
          : <small> Use the form to search a movie </small>
        }
      </div>
    )
  }
}