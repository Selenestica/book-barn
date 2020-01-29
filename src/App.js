import React from 'react';
import './App.css';
import './Header.css'
import './Body.css'
import './AuthorSearch.css'
import { Component } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import AuthorSearch from './components/AuthorSearch'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('http://localhost:4000/view-books')
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json.result
      })
    })
  }

  render() {
    return(<>
        <Header />
        <div className="main-container">
          <AuthorSearch />
          <Body books={this.state.books}/>
        </div>
    </>)
  }
}

export default App;