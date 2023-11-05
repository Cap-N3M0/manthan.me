
import {Link} from 'react-router-dom';
import './header.css';

import Button from './Buttons.js';

export default function Header(){
    return(
        <header className='d-flex flex-wrap '>
            <div className='header-title d-flex justify-content-center col col-10'>
                <Link to={'/'} className='header-item' style={{ textDecoration: 'none' }}>PORTFOLIO</Link>
                <Link to={'/projects'} className='header-item' style={{ textDecoration: 'none' }}>PROJECTS</Link>
                <Link to={'/contact'} className='header-item' style={{ textDecoration: 'none' }}>CONTACT</Link>
            </div>
            <div className='d-flex col col-2 align-items-center justify-content-center'>
                <Button type='primary'> Download CV </Button>
            </div>
        </header>
    )
}