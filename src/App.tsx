import React, { lazy } from "react"
import { Router, Route } from "react-router-dom"
import history from "./routerHistory"

const Home = lazy(() => import("./views/Home"))

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  )
}

export default App
