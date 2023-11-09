import React from 'react';
import './RcMyButtons.css';

import { Link } from 'react-router-dom';

const RC_MyButtons = (props) =>{

    const {type, href } = {...props};
    // console.log(href);
    return(
        
        <div className={"myButtons " + type}>
                    <Link to={href} style={{textDecoration:'none'}}>
                    {props.children}
                    </Link>
        </div>
    )   
}

export default RC_MyButtons;