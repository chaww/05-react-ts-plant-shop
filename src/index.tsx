import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

function Updaters() {
  return (
    <>
      <h1>Updaters</h1>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Updaters />
      <App />
    </Provider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
