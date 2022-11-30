import React, {Component} from "react";
import '../css/stylelogin.css';

export default class Header extends Component{
render(){

    return(
        <>
        
        
        
        <div class="logi">
<form action="entertainments-page3.html" method="get"/>
   
  
    
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required/>
  <br/>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/><br/>
      <label for="uname"><b>select your location</b></label>
      <select  name="countries" id="countries">
        <optgroup label="AFRICIA">
          <option value="Egypt">Egypt</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="europ">
          <option value="france">france</option>
          <option value="audi">Audi</option>
        </optgroup>
        <optgroup label="north america" disabled>
            <option value="canda">canda</option>
            <option value="mexio">mexio</option>
          </optgroup>
      </select>
      <br/>
  
    
      <label>
        <input type="checkbox" checked="checked" name="remember" accesskey="m"/> Remember <u>m</u>e
      </label><br/>
      
      
  

      
     
     <a href="entertainments-page3.html"> <button type="submit" href="entertainments-page3.html">Login</button><br/></a>
    
<form/> 
        
        </div>
        
        
        
        
        </>)}}