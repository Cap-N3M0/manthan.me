import React from  'react';
import './projects.css';

import { } from 'react-icons/';

import html  from '../assets/skills/html-5.png';
import atom  from '../assets/skills/atom.png';
import css from '../assets/skills/css.png';
import java  from '../assets/skills/java.png';
import js from '../assets/skills/js.png';
// import pythn from '../assets/skills/python.png';
import sql from '../assets/skills/sql-server.png';

import { Card, CardGroup} from 'react-bootstrap';


const Projects = () => {
    return(
        <div className='projects' >
            <div className='m-auto'>
                <h3> Skills </h3> <br />
                <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Front End</Card.Title>
                        <Card.Text>
                            
                                <img src={html} alt = 'html'/>
                                <img src={css} alt = 'css'/>
                                <img src={js} alt = 'js' />
                                <img src={atom} alt = 'reactjs'/>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Back End</Card.Title>
                        <Card.Text>
                            
                                <img src={java}  alt = 'java'/>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Database</Card.Title>
                        <Card.Text>
                            
                                <img src={sql} alt='sql' />
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            </div>
        </div>
    )
            
}

export default Projects;