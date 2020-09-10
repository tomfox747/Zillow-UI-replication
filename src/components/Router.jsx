import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './home/Home'
import HomeLoans from './homeLoans/HomeLoans'
import AgentFinder from './agentFinder/AgentFinder'

const Router = () =>{
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/homeloans">
                    <HomeLoans/>
                </Route>
                <Route path="/agentfinder">
                    <AgentFinder/>
                </Route>
            </Switch>
        </div>
    )
}

export default Router