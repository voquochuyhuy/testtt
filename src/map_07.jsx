import React from "react";
import {PathLine} from 'react-svg-pathline';
import ReactDOM from 'react-dom';
import test from "./test.svg";
import './App.css'
class Icon extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            first_point: {},
            second_point:{} ,
            count_to_draw:0,
            path :[],

        };
    }
    componentDidMount(){
       let x =  document.getElementsByTagName("circle");
       console.log(x);
       for(let i = 0;i<x.length;i++){
           x[i].addEventListener("click",()=>{
               console.log(x[i].attributes.cx);
               if(this.state.count_to_draw %2 === 0 )
                { 
                    this.state.first_point.x = x[i].attributes.cx.value;
                    this.state.first_point.y = x[i].attributes.cy.value;
                    this.setState({draw:false});
                    this.setState({count_to_draw:this.state.count_to_draw + 1});
                    return;
                }
                if(this.state.count_to_draw %2 === 1)
                {
                    this.state.second_point.x = x[i].attributes.cx.value;
                    this.state.second_point.y = x[i].attributes.cy.value;
                    this.setState({draw:true});
                    this.setState({count_to_draw:this.state.count_to_draw + 1});
                    const distance_x = this.state.first_point.x - this.state.second_point.x;
                    const distance_y = this.state.first_point.y - this.state.second_point.y;
                    const distance = Math.sqrt(distance_x*distance_x + distance_y*distance_y);
                    let relationship = [
                        this.state.first_point.x,
                        this.state.first_point.y,
                        this.state.second_point.x,
                        this.state.second_point.y,
                        distance
                    ] ;
                    this.setState({ path: [...this.state.path, relationship] });
                    return;
                } 
            })
       }
        
    }

    render(){
    return (
        <object type="image/svg+xml" data={test}
	        ></object>
    );
    }
}

export default Icon;