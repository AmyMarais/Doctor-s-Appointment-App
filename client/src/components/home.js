import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import home from '../images/homeImage.jpg';
import Button from 'react-bootstrap/Button';

class Home extends Component{
    constructor(props){
        super(props)
    }
    //This is the home page component
    render(){
        return(
           <div className="content-wrapper">
               <img src={home} alt="background"/>
               <div className="text-wrapper">
                   <a href="/login"><Button className="HomeLoginButton"><b>Sign in</b></Button></a>{/*Here is the sign button*/}
                   <h1 className="HomeHeading">{`It's a good day to save lives Doc!`}</h1>
                   <br/>
                   <a href="/register"><Button className="HomeButton"><b>Register</b></Button></a>{/*Button to register*/}
               </div>
           </div> 
        )
    }
}

export default Home;
