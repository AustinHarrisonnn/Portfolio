import React from 'react';
import styles from './Navbar.module.css'; 
import home from '../../assets/home-4-line.png';
import projects from '../../assets/git-branch-line.png';
import github from '../../assets/github-line.png';
import instagram from '../../assets/instagram-line.png';
import linkedin from '../../assets/linkedin-box-line.png';

const Navbar = () => {


    return (
        <div className={styles.border}>
            <div className={styles.navLinks}>
                <ul>
                    <li><a href='#'><img src={home} alt='home icon' /></a></li>
                    <li><a href='#'><img src={projects} alt='projects icon' /></a></li>
                    <li><a href='#'><img src={github} alt='github icon' /></a></li>
                    <li><a href='#'><img src={linkedin} alt='linkedin icon' /></a></li>
                    <li><a href='#'><img src={instagram} alt='instagram icon' /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;