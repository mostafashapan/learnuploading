import React, {Component} from "react";
import '../css/cards.css'
import Footer from "./Footer";
// import'../css/style4.css'
// import '../css/responsive.css'
// import'../css/cards.css'



export default class Tvdetailscard extends Component{

render () {
    return(
        <>
        <div class="card">
          <div class="card-image">
            <img />
          </div>
          <div class="card-text">
            <span class="date">4 days ago</span>
            <h2>TV show</h2>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Seasons 
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Seasons1</a>
                  <a class="dropdown-item" href="#">Seasons2</a>
                  <a class="dropdown-item" href="#">Seasonss</a>
                </div>
              </div>
            <p>Lorem ipsum dolor sit amet consectetur,</p>

            <button > TV shows details info</button>
            <div  >
                <button>tv_
                    reviews </button>
              
         <button>similar_shows</button>   
               <a>tv recommendations</a>          
               </div>
               <div class="card-stats">
                <div class="stat ">
               <img />
               
                </div>
                <div class="stat">
                    <img />
                    

                </div>
                <div class="stat ">
                    <img />
                   </div>

                 
                </div>
                </div>
                </div>
              
               
      </>)}}