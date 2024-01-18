import React from 'react';
import styles from './Whitelist.module.css';
import CollapsibleCard from '../components/CollapsibleCard';
import CollapsibleCards from "@/components/AllCollapsibleCards";
import data from "../util/data"

const Whitelist = () => {


    return (
        <div style={{
            height: "fit-content",
            minWidth: "100%",
            backgroundColor: "#b30000",
            borderBottom: "3px solid #fff",
            borderTop: "3px solid #fff",
            padding: "2.5rem",
            zIndex: 2,
        }} id="wl">

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <span style={{fontSize: 54}}>GET WHITELISTED!</span>
                    <span style={{fontSize: 24, marginLeft: 10}}>Join our <span
                        className={styles.discordText}>discord </span>and choose your poison:</span>
                </div>

                {/*<div style={{
                    display: "flex",
                    justifyContent: "normal",
                    height: "fit-content",
                    marginRight: "4rem",
                    marginBottom: "-2rem"
                }}>
                    <div className={styles.leftChevron}>
                        &lt;
                    </div>
                    <div className={styles.rightChevron}>
                        &gt; { Right chevron }
                    </div>
                </div>*/}
            </div>


            <CollapsibleCards data={data} />

        </div>
    );
};

export default Whitelist;
