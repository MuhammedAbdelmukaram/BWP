import React from 'react';
import styles from "./NFTview.module.css"
import Image from "next/image";
import NFT from "../../public/preview.gif";
const NfTview = ({ isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <Image src={NFT} alt="NFT Fullscreen" layout="fill" objectFit="contain" loading="eager"/>

            </div>
        </div>
    );
};

export default NfTview;