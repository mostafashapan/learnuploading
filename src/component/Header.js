import React, {Component} from "react";
import '../css/header.css';

class Header extends Component{
render(){

    return(
        <>
        <header>
            
        <ul>

 <li class="mainlist"><a href="/">Home page</a>

  
</li>

<li class="mainlist"> Now playing page


</li>




<li class="mainlist"><a href="/moviedetails">movie details</a>


</li>
<li class="mainlist"><a href="/tvdetailscards">TV details</a>


</li>





<li class="mainlist">
    <button class="button" > <a href="login">Login</a></button>
</li>


<li class="mainlist">
    <button class="button" type="submit"><a href="htmlpages/register.html">register</a></button>

</li>


</ul>
        </header>
        
        
        </>
    )
}


}

export default Header;