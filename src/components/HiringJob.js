import React from 'react';
import styles from "./HiringJob.module.css"

const HiringJob = ({ title, description, available }) => {
    // Choose the class based on the 'available' prop
    const statusClass = available ? styles.online : styles.offline;

    return (
        <div style={{
            height: 180,
            cursor: "pointer",
            width: 270,
            padding: 16,
            textAlign: "justify",
            backgroundColor: "#fff",
            borderRadius: 10,
            boxShadow: "0 0 10px #F60000FF"
        }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={`${styles.statusDot} ${statusClass}`}></div>
                <p className={styles.title}>{title}</p>
            </div>

            <p className={styles.desc}>{description}</p>
        </div>
    );
};

export default HiringJob;
