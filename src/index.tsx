import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Providers from './Providers'

function Updaters() {
  return (
    <>
      <h1>Updaters</h1>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Updaters />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
)
