import React from "react";
import "./index.css";

const CircularLoading = (props)=>{

    const {delay} = props;

    return (
    
        <>
        
        <div className="circularLoading-container">
            <div style={delay?{animationDelay:delay}:{}}> 
                <span></span>
            </div>
        </div>
        
        
        </>
    )

}

export default CircularLoading;