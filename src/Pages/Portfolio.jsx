import React from  'react';
import Button from '../component/RcMyButtons';
import './portfolio.css';
import img from '../assets/manthan-crop.png';
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import Projects from '../component/RcProjects';
import Contact from '../component/Contact';
import downloadCV from '../component/DownloadCV';


const Portfolio = () => {

    return(
        <>
        <div className='hero'>
            <div className='hero-section-left col-12 col-md-6'>
                <div className='hero-section'>
                    <p>Hi,</p>
                    <p>I'm <span style={{ color: "var(--red)",fontWeight:"500" }}>Manthan Srivastava</span>
                    </p>
                    <br/>
                    <p>Full stack developer with 4+ years of experience <br/>
                    <span style={{ color: "var(--red)",fontWeight:"500"  }}>in your service</span>
                    </p>
                </div>

                <div className='hero-social'>
                    Find me On
                    <div className='d-flex mt-3 gap-4'>
                        <BsInstagram size={40} color='#c13584' onClick={()=>{
                            window.open('https://www.instagram.com/__cap.nemo__/')
                        }}/>
                        <BsLinkedin size={40} color='var(--blue)' onClick={()=>{
                            window.open('https://www.linkedin.com/in/manthan-srivastava/')
                        }}/>
                        <BsWhatsapp size={40} color='green' onClick={()=>{
                            window.open('https://wa.me/9711850100')
                        }}/>

                        <BsGithub size={40} onClick={()=>{
                            window.open('https://github.com/Cap-N3M0')
                        }}/>
                    </div>
                    <div className='d-flex flex-wrap gap-5' style={{marginTop : "30px"}}>
                        <Button type='dark' onClick = {()=>downloadCV()}> Download CV </Button>
                        <Button type='dark' href='/contact'> Hire Me </Button>
                    </div>
                </div>
            </div>
            <div className='hero-section-right d-none d-md-flex col-12 col-md-6'>
                <div className = 'src-image'>
                    <img  src={img} height={'1000vmin'} alt='manthan'/>
                </div>
            </div>
        </div>
        <Projects />
        <Contact />
        </>
    )
            
}

export default Portfolio;