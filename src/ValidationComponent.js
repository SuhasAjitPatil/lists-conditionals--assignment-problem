import React from 'react';

const LengthCheck = (props) =>{
    let lenChkMsg = "";
        if(props.txtLength <= 5){
            lenChkMsg = "Text too short"    
        }
        else{
            lenChkMsg = "Text long enough"    
        }
    return(
       
        <div>
            <p>{lenChkMsg}</p>
        </div>
    )
}

export default LengthCheck;