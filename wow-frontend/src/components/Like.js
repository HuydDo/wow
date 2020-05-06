import React, {Component} from 'react'

class Like extends Component {

  constructor(props){
    super(props)
    this.state = ({
      count: 0,
      show: true
    })
  }

  handleAdd = ()=>{
    this.setState({
       count: this.state.count + 1
     })
   }

   handleSubtract = ()=>{
     this.setState({
        count: this.state.count - 1
      })
   }

  ToggleClick = () =>{
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    return(
      <div>
          <button onClick = {this.handleAdd}>Like</button>
          <button onClick = {this.handleSubtract}>Dislike</button>
          <button onClick = {this.ToggleClick}>
            {this.state.show ? 'Hide number' : 'Show number'}
          </button>
          {this.state.show ? <p>{this.state.count}</p> : ''}
      </div>
    )
  }
}

export default Like