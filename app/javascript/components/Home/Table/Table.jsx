import React, { Component } from 'react'
import Item from './Item'

class Table extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const items = this.props.course_modules.map( (data) => {
      return <Item key={data.id} title={data.title} description={data.description}/>
    })

    return(
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <div className="pt-4 pv-4">
              <h2>React For Rails Developers - Videos</h2>
            </div>

            {items}
          </div>
        </div>
      </div>
    )
  }
}

export default Table