import React from 'react';
import Thanks from "../thanks.jpg";
import "./credit.css";
class Credits extends React.Component{
    render(){
        return(
            <div>
                <div className="full-circle">
            <h1 className="display-4" style={{textAlign:`center`}}>CREDITS</h1>
            <center>
           <img src={Thanks} style={{maxWidth:`50vh`,maxHeight:`50vh`}}/>
            <div>
                <h3><a href="https://www.freepik.com/free-photos-vectors/background" style={{color:`black`}}>Background vector created by katemangostar - www.freepik.com</a></h3>
                <h3><a href="https://www.freepik.com/free-photos-vectors/background" style={{color:`black`}}>Background vector created by starline - www.freepik.com</a></h3>
                <h3><a href="https://www.freepik.com/free-photos-vectors/book" style={{color:`black`}}>Book vector created by freepik - www.freepik.com</a></h3>
                <h3>Made with &#9829; by Chrysna ardy putra pratama</h3>
            </div>
            </center>
            </div>
            </div>
        );
    }
}

export default Credits;