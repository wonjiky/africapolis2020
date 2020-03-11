import React from 'react';
import { Parallax } from 'react-parallax';
import classes from './Parallax.module.css';


const insideStyles = {
    padding: 20,
    fontSize: "2rem",
    position: "fixed",
    // top: "50%",
    left: "50%",
    zIdnex: 0,
    // transform: "translate(-50%,-50%)"
  };

const parallax = props => {
    return(
        <Parallax
            bgImage={props.image}
            strength={0}
        >
            <div style={{height: "650px"}}>
                <div style={insideStyles}>
                <h1 >Hello</h1>
                </div>
            </div>
        </Parallax>
    )
}

export default parallax;