import './buttons.css';

const Button = (props) =>{

    const {type, content} = {...props};

    return(
        
        <div className="button">
                <div className={type ? type : 'primary'}>
                    <span>{props.children}</span>
                </div>
        </div>
    )   
}

export default Button;