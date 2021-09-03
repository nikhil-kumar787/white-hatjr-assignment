import React from "react";

import {Rect , Stage , Layer} from "react-konva";
import { useHistory } from "react-router-dom";
import {Button} from "@material-ui/core";

const Rectangle  = ()=>{

  const history = useHistory();
  let rectangle = [];
    var number = localStorage.getItem('number');
    var height = localStorage.getItem('height');
    var width = localStorage.getItem('width');
    var pickerColor = localStorage.getItem('color');

    var x_axis = 20;
    var y_axis = 20;  
    var color = `hsl(${pickerColor}, 100%, 95%)`
    var d = 95;                           

    for(var i =1; i<=number; i++){
          
      rectangle.push( <Rect
        x={x_axis}
        y={y_axis}
        width={width}
        height={height}
        fill= {color}
        strokeWidth={2} // border width
       stroke="black" // border color
      />
      )
      x_axis = x_axis + 20;
      y_axis = y_axis + 20;
      width = width - 40;
      height = height - 40;
      color = `hsl(${pickerColor}, 100%, ${d}% )`
      d = d-10;

    }
  
const Submit = ()=>{
      localStorage.clear();
      history.push('/');
}

    return(
      <div>
      <Button style={{marginLeft:'20px', marginTop:'20px'}} variant="contained" color="primary" onClick={Submit}>
      Close
   </Button>
        <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer>
         {
           rectangle
         }
        </Layer>
      </Stage>
        </div>
    )
}

export default Rectangle;