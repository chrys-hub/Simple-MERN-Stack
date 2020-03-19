import React from 'react';
import axios from 'axios';
import "./Booklist.css";
import Book from "../book.jpg";
class Booklist extends React.Component{
   state = {
       data:[]
   }
    componentDidMount(){
        axios.get('http://localhost:8080/nota')
        .then(res => this.setState({data:res.data}))
        .catch(err => console.log(err));
    }
    render(){
        console.log(this.state.data)
        return(
            <div className="booklist_border">
            <h1 className="display-4" style={{textAlign:`center`}}>BOOK LIST</h1>
            <div className="row">
      
            {this.state.data.map((buku)=>
            <div class="col-sm-4">
                <div className="card">
                <img class="card-img-top" src={Book} alt="Card image cap" />
                <div class="card-body">
                <h5 class="card-title">Title: {buku.judul}</h5>
                <p class="card-text">{buku.deskripsi}</p>
                </div>
              </div>
            </div>
            )}
     
            </div>
            </div>

        );
    }
}

export default Booklist;