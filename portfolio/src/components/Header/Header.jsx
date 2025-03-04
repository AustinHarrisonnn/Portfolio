import {useState, useEffect } from 'react';
import styles from './Header.module.css'; 

const Header = () => {
    const texts = ["Austin Harrison", "A Web Developer", "A Tech Nerd", "A Learner", "Creative", "Driven By Passion"];
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setCurrentText(texts[index]);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>Hello World,</h1>
                <h1>
                    I am <span className={styles.animatedText}>{currentText}</span>
                </h1>
                <div className={styles.bio}>
                    <h3>
                        a senior-year Computer Science and Engineering student
                        at Florida Atlantic University specializing in full-stack
                        development with a strong focus in back-end technologies.
                        I love designing and developing applications that peak my 
                        interests and satisfy my desire to express my creativity.
                    </h3>
                </div>
                <div className={styles.buttonHolder}>
                    <button className={styles.resumeButton}>Resume</button>
                </div>
            </div>
        </div>
    );
}

export default Header;