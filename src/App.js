import React from 'react';
import './App.css'
import {Switch, Route, Link} from 'react-router-dom'

import Router from './components/Router' 
import Header from './components/header/Header'

function App() {
    return (
        <div className="body">
            <Header/>
            <Router/>
        </div>
    );
}

export default App;
