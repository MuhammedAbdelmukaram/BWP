import React from 'react';
import styles from './LoginModal.module.css';
import Dashboard from '/public/Dashboard.png';
import Image from 'next/image';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <div>
                    <p style={{color:"#000", fontSize:26, marginLeft:25}}>BWP dashboard - investment portfolio</p>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                </div>
                {/* Image and Coming Soon Text */}
                <div className={styles.imageContainer}>
                    <Image src={Dashboard} alt="Dashboard" layout="responsive"  style={{ border:"8px solid #b1b1b1"}} />


                    <div style={{marginTop:30}}>
                        <p className={styles.text}>Follow your own portfolio of NFTs and Coins</p>
                        <p className={styles.text}>Insight into BWP earnings</p>

                    </div>

                    <p className={styles.comingSoonText}>Coming Soon...</p>
                   </div>
            </div>
        </div>
    );
};

export default LoginModal;
