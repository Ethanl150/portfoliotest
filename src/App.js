import Main from "./Main.js"
import Contact from "./Contact.js"
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css"

function App() {
    return (
        <Router>
            <div>
                <nav className="nav navbar navbar-light bg-primary d-flex justify-content-between p-3">
                    <a href="/" className="pl-2"><h2>Portfolio</h2></a>
                    <a href="/contact" className="pr-2"><h4>Contact Me</h4></a>
                </nav>
                <Route exact path="/" component={Main} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    )
}

export default App;