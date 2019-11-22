import React from "react"
import { render } from "react-dom"

import b from "./image/b.jpg"
import c = require("./image/c.jpg")
var d = require("./image/d.jpg")

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <img src={b} />
                <img src={c} />
                <img src={d} />
            </div>
        )
    }
}

var el = document.getElementById("root")
render(<App />, el)