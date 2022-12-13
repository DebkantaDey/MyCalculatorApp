

import React from 'react';
import Header from './Header';
const Output = props =>{
    return(
        <div>
            <Header value={props.answer} textsize={{fontSize: '20px'}}/>
            <Header value={props.user}/>
        </div>
    )
}
export default Output;