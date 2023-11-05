import React from  'react';
import Button from './MyButtons.js';
import './portfolio.css';
import img from '../assets/manthan-crop.png';
import {BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import Projects from './Projects';


const Portfolio = () => {
    return(
        <>
        <div className='hero'>
            <div className='hero-section-left col-6 row'>
                <div className='hero-section'>
                    <p>Hi,</p>
                    <p>I'm <span style={{ color: "var(--red)" }}>Manthan Srivastava</span>
                    </p>
                    <br/>
                    <p>Full stack developer with 4+ years of experience <br/>
                    <span style={{ color: "var(--red)" }}>in your service</span>
                    </p>
                </div>

                <div className='gap-5'>
                    Find me On
                    <div className='d-flex mt-3 gap-4'>
                        <BsInstagram size={40} href='' color='#c13584' />
                        <BsLinkedin size={40} href='' color='var(--blue)'/>
                        <BsWhatsapp size={40} href='' color='green'/>
                    </div>
                    <div className='d-flex flex-wrap gap-3' style={{"margin-top" : "30px"}}>
                        <Button type='dark'> Download CV </Button>
                        <Button type='dark' href='/contact'> Hire Me </Button>
                    </div>
                </div>
            </div>
            <div className='hero-section-right col-6'>
                <div className = 'src-image'>
                    <img  src={img} height={1000} alt='manthan'/>
                </div>
            </div>
        </div>
        <Projects />
        </>
    )
            
}

export default Portfolio;