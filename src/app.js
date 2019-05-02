import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/common/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


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
              <Route path="/" component={Home} />
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
