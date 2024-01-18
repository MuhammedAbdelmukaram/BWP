import React, {useState} from 'react';
import styles from '../css/header.module.css';
import Twitter from "../../public/twitter.png";
import Image from "next/image";
import yourIconImage from "../../public/LogoPNGFINAL.png";
import Discord from "../../public/discord.png"; // Import as a module

const Header = ({onLoginClick}) => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className={styles.header}>
            <Image src={yourIconImage} className={styles.logo} alt="Icon" width={60} height={60} loading="eager"/>
            <ul className={styles.buttons}>
                <li>
                    <button onClick={() => scrollToSection('home')} className={styles.button}>HOME</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('wl')} className={styles.wl}>WHITELIST OPPORTUNITIES</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('roadmap')} className={styles.button}>ROADMAP</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('team')} className={styles.button}>TEAM</button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('faqSection')} className={styles.button}>FAQ</button>
                </li>
            </ul>
            <ul className={styles.buttons}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginRight: "3rem", marginTop:8}}>
                    <a href="https://twitter.com/BountyWolfPack" target="_blank" rel="noopener noreferrer" style={{marginRight:"0.5rem", cursor:"pointer"}} className={styles.social}>
                        <Image src={Twitter} alt="Twitter" width={30} height={30} loading="eager"/>
                    </a>
                    <a href="https://discord.gg/hbhYGPf7sw" target="_blank" rel="noopener noreferrer" style={{marginRight:"1rem", cursor:"pointer"}} className={styles.social}>
                        <Image src={Discord} alt="Discord" width={30} height={30} loading="eager"/>
                    </a>
                </div>
                <li>
                    <button className={styles.buttonLogin} onClick={onLoginClick}>Login</button>
                </li>
            </ul>
        </div>
    );
};

export default Header;
