
import React from "react";
import Lampa from "./Lampa";
const stomb=[{allapot:true},{allapot:true},{allapot:true},{allapot:true},{allapot:true},{allapot:true},{allapot:true},{allapot:true},{allapot:true}];

class Jatekter extends React.Component{
    constructor(props){
        super();
        this.state={
            tomb:stomb
        }
        console.log(this.hanyDb());
    }
    kattintasKezelo=(aktid)=>{
        stomb[aktid].allapot=!stomb[aktid].allapot;
        this.setState({
            tomb:stomb
          })
      }
      kattint=(aktid)=>{
        this.szomszedValtoztat(aktid);
      }
      hanyDb=()=>{
        return 10;
      }

      szomszedValtoztat=(aktid)=>{
          
          let meret=3
        if (aktid > meret - 1) {
            this.kattintasKezelo(aktid-meret);
        }
        if (aktid < (meret * meret) - meret) {
            this.kattintasKezelo(aktid+meret);
        }

        if (aktid % meret !== 0) {
            this.kattintasKezelo(aktid-1);
        }
        if (aktid % meret !== meret - 1) {
            this.kattintasKezelo(aktid+1);
        }
        this.kattintasKezelo(aktid);
      }

    render(){
    return (
        <React.Fragment>
        <header><h3>Light On játék</h3></header>
            <section>
            <div className="jatekTer">
            {
                this.state.tomb.map((elem,index)=>{
                    
                    return <Lampa key={index} id={index} allapot={elem.allapot} kattintaskezel={this.kattint}></Lampa>
                })
            }
            </div>
            <p>A lekapcsolt lámpák száma:</p>
            <button className="ujGomb">Új játék</button>
            </section>
            
        </React.Fragment>
        );
    }
}
export default Jatekter;