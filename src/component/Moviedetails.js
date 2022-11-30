import React, { Component } from "react";
import Header from "./Header";
import '../css/cards.css'
import Side from "./Side";
import Footer from "./Footer";


export default class Moviedetails extends Component {

    render() {
     
        return (
           

<>
                
               

                <div class="center">
                    <div class="card">
                        <div class="card-image">
                            <img />
                        </div>
                        <div class="card-text">
                            <span class="date">4 days ago</span>
                            <h2>movie_details</h2>
                            <p>Lorem ipsum dolor sit amet consectetur,</p>

                            <button > recommendations</button>
                            <div  >
                                <button> movie_reviews</button>

                                <button> similar movies</button>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                </>

                );
    
    }}