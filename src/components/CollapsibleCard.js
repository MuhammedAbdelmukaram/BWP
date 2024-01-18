"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import styles from './CollapsibleCard.module.css';
import SingleStep from "@/components/SingleStep"; // Import your CSS module

const CollapsibleCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(!isOpen);

    // Function to determine if the date has passed
    const getTodayDate = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Resetting the time to midnight for a date-only comparison
        return today;
    }

    const isDatePassed = (dateString) => {
        if (dateString === "Unlimited") return false;

        const eventDate = new Date(dateString);
        eventDate.setHours(0, 0, 0, 0);

        const today = getTodayDate();
        console.log(`Comparing eventDate: ${eventDate} with today: ${today}`);

        // Return true if the event date has passed, otherwise false
        return today > eventDate;
    };



    // Determine the status class based on the date
    const statusClass = isDatePassed(data.date) ? styles.offline : styles.online;

    return (
        <div className={styles.card}>
            <div className={styles.upperContainer} onClick={toggleOpen}>
                <div style={{ display: "flex", flexDirection:"column" }}>
                    <div className={styles.upperTextContainer}>
                        <div>
                            <div className={`${styles.statusDot} ${statusClass}`}></div>
                            <span>REWARD: {data.reward}</span>
                        </div>
                        <div><span style={{ marginLeft: "3rem", fontSize: 14 }}>TYPE: {data.type}</span></div>
                    </div>

                    <div>
                        <span style={{fontFamily:"cursive"}}>{data.date}</span>
                    </div>
                </div>

                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                    <div className={isOpen ? styles.chevronUp : styles.chevronDown}></div>
                </div>
            </div>

            <div className={isOpen ? styles.lowerContainerOpen : styles.lowerContainerClosed}>
                <div style={{ marginTop:8, padding:"1rem 0 1rem 1rem" }}>
                    <Image src={data.image} alt="Icon" width={136} height={136} />
                </div>

                <div style={{ paddingLeft:16, padding:"1rem 1rem 1rem 1rem" }}>
                    <div>
                        <p style={{ color:"#000", width:"100%", textAlign:"center" }}>{data.title}</p>
                    </div>
                    <div style={{ marginTop:8 }}>
                        <p style={{ color:"#000", fontSize:12, fontFamily:"cursive" }}>{data.description}</p>
                    </div>

                    <div style={{ marginTop:"1.5rem", justifyContent:"center" }}>
                        {data.steps.map((step, index) => (
                            <SingleStep key={index} icon={step.icon} text={step.text} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollapsibleCard;
