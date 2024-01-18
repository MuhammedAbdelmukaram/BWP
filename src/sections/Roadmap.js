import React from 'react';
import styles from './Roadmap.module.css'; // Import your CSS module

const Roadmap = () => {
    const roadmapItems = [
        {
            step: 'Phase I',
            title: 'Assemble the Pack',
            text: '555 Bounty Wolf Pack NFTS for 1 SOL.  Presale mint exclusive to OG Wolves. No mint limits for OG Wolves during Presale. Official Mint starts at 20:30 UTC. Rarity Chart Release - MoonRank. Listing on Tensor & MagicEden',
            side: 'left'
        },
        {
            step: 'Phase II',
            title: 'The Hunt Begins',
            text: 'NFT Holder verification system. Staking online for $WOLFIE. Access to DAO and Analysis channel for verified holders. Daily analysis of upcoming NFT mints & coins. First payouts first Friday of the month, at 20:30 UTC.',
            side: 'right'
        },
        {
            step: 'Phase III',
            title: 'Catching a Bull',
            text: 'Venture Capital Office for NFT. Daily scouting for promising projects. Funding promising NFT projects. Distribution of payouts each Sunday at 20:30 UTC.',
            side: 'left'
        },
        {
            step: 'Phase IV',
            title: 'Werewolf Transformation',
            text: 'The Great Expansion. Diversification of portfolio beyond NFTs and Coins. Analysis of altcoins and digital lands. First Bounty Wolf Pack merch drop.',
            side: 'right'
        },

        // ... add more items here if needed
    ];

    const itemTopOffset = 100;
    const itemIncrement = 300;

    const renderBulletPoints = text => {
        return text.split('. ').map((sentence, index) => {
            if (sentence.trim() !== '') {
                return <li style={{marginTop:14}} key={index}>{sentence.trim().endsWith('.') ? sentence : sentence + '.'}</li>;
            }
            return null;
        });
    };

    return (
        <div className={styles.roadmapContainer}>
            <div className={styles.centerLine}></div>
            {roadmapItems.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.roadmapItem} ${styles[item.side]}`}
                    style={{ top: `${itemTopOffset + index * itemIncrement}px` }}
                >
                    <div className={styles.step}>{item.step}</div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}>
                        <ul className={styles.descriptionText}>

                            {renderBulletPoints(item.text)}
                        </ul>
                    </div> {/* Added description */}
                </div>
            ))}
            <div
                className={styles.roadmapItemLast}
            >
                <div className={styles.step}>????</div>
                <div className={styles.title}>Mistery reveal</div>
                <div className={styles.description}>
                    <ul className={styles.descriptionText}>

                        <li> Stay tuned...</li>
                    </ul>
                </div> {/* Added description */}
            </div>
        </div>
    );
};

export default Roadmap;
