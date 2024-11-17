import React from 'react';
// Import pages
import AboutUs from './pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router> {/* Wrap everything in BrowserRouter */}
            <div className="App"> 
                <GlobalStyle />
                <Nav />
                <Switch>
                    <Route path="/" exact>  
                        <AboutUs />
                    </Route>
                    <Route path="/courses"> 
                        <Courses />
                    </Route>
                    <Route path="/contact"> 
                        <ContactUs />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
