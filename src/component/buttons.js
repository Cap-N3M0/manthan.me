import { Link } from 'react-router-dom';
import './buttons.css';

const Button = (props) =>{

    const {type, classes} = {...props};

    return(
        
        <div className="button " style={classes}>
                <div className={type ? type : 'primary'}>
                    <Link to={'/contact'} style={{ textDecoration: 'none', 'color':'white' }}>
                    <span>{props.children}</span>
                    </Link>
                </div>
        </div>
    )   
}

export default Button;