import React from 'react';
import styles from "./NFTview.module.css"
const NfTview = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default NfTview;