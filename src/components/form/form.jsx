import React, { useState } from  "react";

import {Button , TextField } from "@material-ui/core";

import {Link} from "react-router-dom";

const Form = ()=>{

    const [number , setNumber] = useState('');
    const [height , setHeight] = useState('');
    const [width , setWidth]   = useState('');
    const [color , setColor]   = useState('');
 
    const Submit = ()=>{
        localStorage.setItem('number',number);
        localStorage.setItem('height',height);
        localStorage.setItem('width',width);
        localStorage.setItem('color',color);

    }


    return(
        <div style={{marginLeft:"10px"}}>
        <h2>Fill it</h2>
        <form className="form">
        <TextField className="input" label="Number of Rectangle" value={number}
         onChange={(e) => setNumber(e.target.value)} variant="outlined" />

         <br></br>

         <TextField className="input" label="Height" value={height}
         onChange={(e) => setHeight(e.target.value)} variant="outlined" />

         <br></br>

         <TextField className="input" label="Width" value={width}
         onChange={(e) => setWidth(e.target.value)} variant="outlined" />
         <br></br>
          <TextField className="input" label="Enter Number between 0 to 345 For color" value={color}
         onChange={(e) => setColor(e.target.value)} variant="outlined" />
        </form>
        <br></br>
        <Link to='/rectangle' style={{textDecorationLine:'none'}}>
        <Button variant="contained" color="primary" onClick={Submit}>
         Submit
      </Button>
      </Link>
        </div>
    )
}

export default Form;