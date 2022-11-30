
import React, {Component} from "react";
import '../css/cards.css';
import Leftbar from "./Leftbar";
export default class Carddetails extends Component{

render () {
    return(
      
        <>
        
    <div class="card">
    <div class="card-image">
     <img class="newsrc" />
    </div>
    <div class="card-text">
      <span class="date">4 days ago</span>
      <h2 class="changename">{this.props.cardtitl}</h2>
      <p>{this .props.details}</p>
    </div>
    <div class="card-stats">
      <div class="stat ">
     
      </div>
      <div class="stat">
      
      </div>
      <div class="stat ">
       
         </div>
      </div>
    </div>
    
    </>
    );
}

}