import React from 'react';
import './RcMyButtons.css';

import { Link } from 'react-router-dom';

const RC_MyButtons = (props) =>{

    const {type, href, onClick } = {...props};
    
    return(
        
        <div className={"myButtons " + type}>
                    <Link to={href} style={{textDecoration:'none'}} onClick={onClick}>
                    {props.children}
                    </Link>
        </div>
    )   
}

export default RC_MyButtons;