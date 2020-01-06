import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = 'd3eec465'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie = ({ id }) => {
    let url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
      })
  }

  _goBack = () => window.history.back()

  componentDidMount() {
    const { id } = this.props.match.params
    this._fetchMovie({ id })
  }

  render(){
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
    return(
      <div>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title}/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}