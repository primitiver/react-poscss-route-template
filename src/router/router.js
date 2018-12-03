import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import List from '../pages/List/List'
import App from '../pages/App/App'

const Root = () => (
  <HashRouter>
    <div>
      <Link to={{ pathname: '/list/:name', state: 'sdfsdfsdf' }}>to list</Link>
      <Route path="/" exact component={App} />
      <Route path="/list/:name" component={List} />
    </div>
  </HashRouter>
)

export default Root
