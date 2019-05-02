import React from 'react'
import ReactDOM from 'react-dom'
import TextEditor from '../TextEditor'

class Home extends React.Component{
  constructor() {
    super()


  }



  render(){
    return(
      <section id="home">
        <h1>Codepear</h1>
        <TextEditor />
      </section>
    )
  }
}

export default Home
