import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Table from './Table/Table';
import axios from 'axios'

class Home extends Component {
  constructor(){
    super()

    this.state = {
      course_modules: []
    }
  }

  componentDidMount(){
    axios.get('/episodes.json')
    .then(data => {
      debugger
      let res = []
      data.data.data.map( (data) => {
        res.push({id: data.id, title: data.title, description: data.description, active: false })

        this.setState({course_modules: res})
      })
    })
    .catch(data => {
      debugger
    })
  }

  handleVideoChange(item, event){
    event.preventDefault()

    let course_modules = [...this.state.course_modules]

    course_modules.map( data => {
      data.active = false
    })

    item.active = !item.active

    course_modules[item.id - 1] = item

    this.setState({})
  }

  render() {
    return (
      <section>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <Jumbotron/>
        <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
        <Footer/>
      </section>
    )
  }
}

export default Home