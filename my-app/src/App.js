import { HashRouter, Route, Switch } from 'react-router-dom'
import Main from './main'
import Resume from './resume'
import AnimatedCursor from 'react-animated-cursor'

function App() {
  // const [windowLocation, setWindowLocation] = useState('')
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/" component={Main} />
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
