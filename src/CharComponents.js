import React from 'react';
import './CharComponent.css';

const charBlock = (props) =>{
    return(
    <div className="charBlock">
        <p onClick={props.click}> {props.chr} </p>
    </div>    
    )}

export default charBlock;