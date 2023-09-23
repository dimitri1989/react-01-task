import React,{Component,Fragment} from "react";
import ReactDOM from "react-dom/client";
import ColorsTitle from "./ColorsTitle";


class App extends Component {
    constructor(){
        super()
        this.state ={
            
                text:"hello from react, today is day",
                time: new Date()
            
        }
        
    }
    render(){
        return (
            <Fragment>{
                <div style={{color:"red",display:"flex", justifyContent:"center"}}>{this.state.text + " " + this.state.time} </div>
                
                }</Fragment>
        )
    }
}
var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App></App>)