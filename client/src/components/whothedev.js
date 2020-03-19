import React from 'react';
import Slav from '../slavme.png';
import "./developer.css";
class Dev extends React.Component{
    render(){
        return(
            <div className="devborder">
            <h1 className="display-4" style={{textAlign:`center`}}>ABOUT DEVELOPER</h1>
            <center>
                <img src={Slav} style={{maxWidth:`55vh`,maxHeight:`55vh`,transform:`rotate(180deg)`}}/>
           
            <div className="intro">
                <h3>Hello blyn it's me chrysna,I'm a front end developer,gamer,guitarist,and SLAVV,
                    i make things,do things,i'm just a fool programer who love to work hard,Now Yuri Getz Diz Codez
                    And Starz my githubz you blyn or i'll call the police and put a bomb on your house
                </h3>
            </div>
            </center>
            </div>
        );
    }
}

export default Dev;