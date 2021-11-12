import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Site Page
import Header from '../components/Header'

import Home from './Home'
import Movies from './Movies'
import Tvshows from './Tvshows'
import People from './People'
import NotFound from './NotFound'

function MainRoute() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/tvshows/:slug">
                    <Tvshows/>
                </Route>
                <Route exact path="/tvshows">
                    <Tvshows/>
                </Route>
                <Route exact path="/movies/:slug">
                    <Movies/>
                </Route>
                <Route exact path="/movies">
                    <Movies/>
                </Route>
                <Route exact path="/people">
                    <People/>
                </Route>
                <Route exact path="/404">
                    <NotFound/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
  }
  
  export default MainRoute;
