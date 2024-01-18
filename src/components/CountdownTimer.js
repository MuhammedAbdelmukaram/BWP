// components/CountdownTimer.js
"use client"
import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css'; // You will create this CSS module



const CountdownTimer = ({ targetDate,className  }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

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

    return (
        <div className={`${styles.countdownTimer} ${className}`}>
            <div style={{marginBottom:6}}>
                <p style={{fontSize:24, marginTop:"-5px"}}>MINT IN:</p>
            </div>
            {Object.keys(timeLeft).length > 0 ? (
                Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} style={{display:"flex", justifyContent:"flex-end"}}>
                        <div style={{borderRight:"1px solid #fff", paddingRight:8, paddingTop:2}}>{unit}</div>

                        <div style={{width:24, marginTop:2}}>{value}</div>
                    </div>
                ))
            ) : (
                <div>Times up!</div>
            )}
        </div>
    );
};

export default CountdownTimer;
