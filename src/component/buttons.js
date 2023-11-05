import { Link } from 'react-router-dom';
import './buttons.css';

const Button = (props) =>{

    const {type, href } = {...props};

    return(
        
        <div className="button ">
                <div className={type ? type : 'primary'}>
                    <a href={href} style={{ textDecoration: 'none', 'color':'white' }}>
                    {props.children}
                    </a>
                </div>
        </div>
    )   
}

export default Button;