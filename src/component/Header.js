import { Navbar } from 'react-bootstrap';
import './Header.css';

import Button from './buttons';

export default function Header(){
    return(
        <header className='d-flex'>
            <div className='header-title d-flex justify-content-center col col-10'>
                <div className='header-item'>PORTFOLIO</div>
                <div className='header-item'>PROJECTS</div>
                <div className='header-item'>CONTACT</div>
            </div>
            <div className='d-flex col col-2 align-items-center justify-content-center'>
                <Button> Download CV </Button>
            </div>
        </header>
    )
}