import { HashRouter, Route, Switch } from 'react-router-dom'

import Main from './main'
import Resume from './resume'
import AnimatedCursor from 'react-animated-cursor'
import React, { useState } from 'react'
function App() {
  const [snowOpen, setSnowOpen] = useState(false)
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Main setSnowOpen={setSnowOpen} snowOpen={snowOpen} />
        </Route>
      </Switch>
      <div className="Cursor">
        <AnimatedCursor
          innerSize={30}
          outerSize={20}
          color="246, 195, 39"
          // color="2, 5, 39"
          outerAlpha={0.4}
          innerScale={1}
          outerScale={5}
        />
      </div>
    </HashRouter>
  )
}

export default App
