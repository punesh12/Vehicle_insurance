import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Car from './Car'
import Bike from './Bike'
import Health from './Health'
import './Home.css'
import Navigation from './Navigation'

function Home() {
    return (
        <Router>

        <div className="home">
             <Navigation />


            <div class="home_intro">

                <h1>Insurance made easy</h1>
                <h3>Zero commision. Zero Paperwork.</h3>
                
                <div class="insurance_option">
                    <Router>
                    <Switch>
                            <Route path="/car">
                            <Car />
                            </Route>
                            <Route path="/bike">
                            <Bike />
                            </Route>
                            <Route path="/health">
                            <Health />
                            </Route>
                        </Switch>
                    </Router>
                </div>

                <div class="offers">
                    <div class="latest_offer">
                        <span>
                        <h4>Get protection worth 10K at just Rs.299</h4>
                        <p>* Key protect * Roadside assistance * Outstation emergency</p>
                        </span>
                    </div>
                </div>

                <div class="features">
                    <div class="row3">
                        <h4>Incredibly Low Premiums</h4>
                        <p>Insuring things that matter to you shouldn’t come at a cost. 
                        That’s why when you buy from us, you get insurance that fits your pocket.</p>
                    </div>
                    <div class="row3">
                        <h4>Super-Quick and Easy</h4>
                        <p>We’re 100% digital, easy and effortless. 
                        Forget paperwork and access all our services with just a few clicks online.
                        </p>
                    </div>
                    <div class="row3">
                        <h4>Zero-hassle Claims</h4>
                        <p>We are on a mission to make insurance claims stress-free. Just give us a call or file a claim online and experience speedy cashless claim settlements.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </Router>


    )
}

export default Home
