import React from 'react';
import './outputHeader.css';

const outputHeader=props=>{
    return(
        <div>
            <input type='text' readOnly className='screen' style={props.textsize} value={props.value}></input>
        </div>
    )
}
export default outputHeader;

