import React from 'react';
// Import pages
import AboutUs from './pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import CourseDetail from './pages/CourseDetails';
// Router
import { Switch, Route } from  "react-router-dom";

function App() {
    return (
        
            <div className="App"> 
                <GlobalStyle />
                <Nav />
                <Switch>
                    <Route path = "/" exact>  
                        <AboutUs />
                    </Route>
                    <Route path = "/courses" exact> 
                        <Courses />
                    </Route>
                    <Route path="/courses/:id">
                        <CourseDetail />
                    </Route>
                    <Route path = "/contact"> 
                        <ContactUs />
                    </Route>
                </Switch>
            </div>
      
    );
}

export default App;
