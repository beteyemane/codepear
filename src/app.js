import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import TextEditor from './components/TextEditor'


import './style.scss'

class App extends React.Component{
  constructor() {
    super()
  }



  render(){
    return(
      <div>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/texteditor" component={TextEditor} />
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
