"use client"
import React, { useState } from 'react';
import styles from './CollapsibleFaq.module.css'; // Import your CSS module

const CollapsibleFaq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={toggleOpen}>
                {question}
                <span className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}>
                    {'>'}
                </span>
            </div>
            {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
        </div>
    );
};

export default CollapsibleFaq;
