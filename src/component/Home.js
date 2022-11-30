//import '../App.css';
import Header from './Header';
import Side from './Side';
import'../css/row.css'

import Carddetails from './Carddetail';
import  Leftbar from './Leftbar';
import Footer from './Footer';
import Moviedetails from './Moviedetails';
import React, { Component } from "react";
//import Map from './Map';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Home extends Component {

state={
  {

    cardtitl:"movie1" ,details:"movie1  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    cardtitl:"movie2" ,details:"movie2  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    cardtitl:"movie3" ,details:"movie3  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    cardtitl:"movie4" ,details:"movie4  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    cardtitl:"movie5", details:"movie5 ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
  }


}



  render() {
      return(
    <>
    
    
    <div className='rowC'>
    < Leftbar/>
    <div className='wrap'>

    <Carddetails cardtitl="movie1" details="movie1  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    <Carddetails cardtitl="movie2" details="movie2  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    <Carddetails cardtitl="movie3" details="movie3  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    <Carddetails cardtitl="movie4" details="movie4  ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
    <Carddetails cardtitl="movie5" details="movie5 ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"/>
</div>

    </div>
    
    
    
  

    
    
    </>
  )
}}

