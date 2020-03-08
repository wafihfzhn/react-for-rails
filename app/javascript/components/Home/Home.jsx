import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component {
  constructor(){
    super()

    this.state = {
      modules: [
        { id: 1, title: '1. Setting up a new Ruby on Rails App with React.', description: 'Lorem Ipsum', active: false },
        { id: 2, title: '2. Adding React to an Existing Rails App.', description: 'Lorem Ipsum', active: false },
        { id: 3, title: '3. Building a Hello Wordl App.', description: 'Lorem Ipsum', active: false },
        { id: 4, title: '4. Adding React Router Dom to your App', description: 'Lorem Ipsum', active: false }
      ]
    }
  }

  render() {
    return (
      <div>
        <Jumbotron/>
      </div>
    )
  }
}

export default Home