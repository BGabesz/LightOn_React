import React from "react";
import './Lampa.css';

class Lampa extends React.Component {
    
      kapcsolas=()=>{
        console.log(this.props.id);
        this.props.kattintaskezel(this.props.id);
      }
    render(){
  
      return (
        <div className={this.props.allapot?"Lampa szinOn":"Lampa szinOff"} onClick={this.kapcsolas}>

        </div>
        );
      }
    }
     
    export default Lampa;