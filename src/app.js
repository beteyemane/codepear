import React from 'react'
import ReactDOM from 'react-dom'
import { setPusherClient } from 'react-pusher'
import Pusher from 'pusher-js'
import './style.scss'

class App extends React.Component{
  constructor() {
    super()


  }

  componentDidMount(){
    const pusherClient = new Pusher({
    })

    setPusherClient(pusherClient)
  }

  render(){
    return(
      <h1>Codepear</h1>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
