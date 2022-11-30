
import './App.css';

import Header from './component/Header';
import Side from './component/Side';
import'./css/row.css'

import Carddetails from './component/Carddetail';
import  Leftbar from './component/Leftbar';
import Footer from './component/Footer';
import Moviedetails from './component/Moviedetails';

import React from "react";
//import Map from './Map';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import Home from './component/Home';
import Tvdetailscard from './component/Tvdetailscard';
import Login from './component/Login';

function App() {
  return (
    <>
    
    <div mainclass="container">
   
    <Header/>
    
    
                    <Route path="/"         component={Home} exact/>
                    <Route path="/moviedetails" component={Moviedetails }/>
                    <Route path="/tvdetailscards" component={Tvdetailscard}/>
                    <Route path="/Login" component={Login}/>
                    
                    
                               

           
  
  


                    </div>
                    <Footer/>
                    
    
    </>
  );
}

export default App;
