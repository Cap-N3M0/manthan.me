import React from 'react';
import './RcMyButtons.css';

const RC_MyButtons = (props) =>{

    const {type, href } = {...props};
    console.log(type);
    return(
        
        <div className={"myButtons " + type}>
                    <a href={href} style={{}}>
                    {props.children}
                    </a>
        </div>
    )   
}

export default RC_MyButtons;