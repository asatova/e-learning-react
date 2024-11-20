import React from 'react';
// Import pages
import AboutUs from './pages/AboutUs';
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Courses from './pages/Courses';
import ContactUs from './pages/ContactUs';
import CourseDetail from './pages/CourseDetails';
// Router
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    return (
        <div className="App"> 
            <GlobalStyle />
            <Nav />
            <AnimatePresence mode="wait"> {/* Updated here */}
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>  
                        <AboutUs />
                    </Route>
                    <Route path="/courses" exact> 
                        <Courses />
                    </Route>
                    <Route path="/courses/:id">
                        <CourseDetail />
                    </Route>
                    <Route path="/contact"> 
                        <ContactUs />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
