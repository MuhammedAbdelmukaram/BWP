import { useState, useEffect } from 'react';
import styles from './modal.module.css'; // Ensure this is correctly imported

const Modal = ({ isOpen, onClose }) => {
    const [timeLeft1, setTimeLeft1] = useState(calculateTimeLeft( '2024-01-30T21:00:00'));
    const [timeLeft2, setTimeLeft2] = useState(calculateTimeLeft('2024-01-30T21:30:00'));

    useEffect(() => {
        const timer1 = setInterval(() => {
            setTimeLeft1(calculateTimeLeft('2024-01-30T21:00:00'));
        }, 1000);

        const timer2 = setInterval(() => {
            setTimeLeft2(calculateTimeLeft('2024-01-30T21:30:00'));
        }, 1000);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, []);

    function calculateTimeLeft(targetDate) {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const renderTime = (timeLeft, label) => {
        return (
            <div className={styles.timerContainer}>
                <h3 className={styles.timerLabel}>{label}</h3>
                <div className={styles.timerDisplay}>
                    {Object.keys(timeLeft).length > 0 ? (
                        Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className={styles.timerUnit}>
                                <span className={styles.timerValue}>{value}</span>
                                <span className={styles.timerUnitName}>{unit}</span>
                            </div>
                        ))
                    ) : (
                        <div>Times up!</div>
                    )}
                </div>
            </div>
        );
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2>Mint BWP in:</h2>
                <div className={styles.countdownWrapper}>
                    {renderTime(timeLeft1, "WL Mint")}
                    {renderTime(timeLeft2, "Public Mint")}
                </div>
            </div>
        </div>
    );
};

export default Modal;
