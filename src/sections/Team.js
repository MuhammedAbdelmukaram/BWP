import React from 'react';
import Image from "next/image";
import Deity from "../../public/Deity.png";
import BamBam from "../../public/bambam.jpg";
import Sophisticated from "../../public/Sophisticated.jpg";
import Twitter from "../../public/twitter.png";
import styles from "./Team.module.css";
import HiringJob from "@/components/HiringJob";
const Team = () => {
    return (
        <div style={{marginTop: "5rem", borderTop:"4px solid #fff", paddingTop:100, backgroundColor:"#180823"}} >
            <p style={{fontSize: 84, marginBottom:"7rem" }}>Team</p>
            <div style={{display: "flex", width: "100%", justifyContent: "center", gap:110}}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div style={{border: "4px solid #fff", borderRadius:1000, maxHeight:358, maxWidth:358}}>
                        <Image src={Deity} alt="Blueprint" width={350} height={350} style={{borderRadius:1000}} loading="eager"/>
                    </div>
                    <div className={styles.teamTexts}>
                        <p className={styles.teamName}>Deity</p>
                        <p className={styles.teamTitle}>Co-Founder</p>

                        <div className={styles.teamFacts} style={{textAlign:"center"}}>
                            <p className={styles.teamFact}>-Lead chill wolf</p>
                            <p className={styles.teamFact}>-Most relaxed and wise zen philosopher</p>
                            <p className={styles.teamFact}>-Always in tranquil repose, embracing serenity</p>
                        </div>
                    </div>

                    <div style={{marginTop:30, width:"100%", display:"flex", justifyContent:"flex-end"}}>
                        <Image src={Twitter} alt="Blueprint" width={24} height={24} style={{marginRight:30}} loading="eager" />
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div style={{border: "4px solid #fff", borderRadius:1000, maxHeight:358, maxWidth:358}}>
                        <Image src={Sophisticated} alt="Blueprint" width={350} height={350} style={{borderRadius:1000}} loading="eager"/>
                    </div>
                    <div className={styles.teamTexts}>
                        <p className={styles.teamName}>Sophisticated Wolf</p>
                        <p className={styles.teamTitle}>Founder</p>

                        <div className={styles.teamFacts}>
                            <p className={styles.teamFact}>-Lead opportunity wolf</p>
                            <p className={styles.teamFact}>-Most negotiable, fostering collaborative spirit</p>
                            <p className={styles.teamFact}>-Always ready to harmoniously collaborate for success</p>
                        </div>
                    </div>

                    <div style={{marginTop:30, width:"100%", display:"flex", justifyContent:"flex-end"}}>
                        <Image src={Twitter} alt="Blueprint" width={24} height={24} style={{marginRight:30}} loading="eager" />
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <div style={{border: "4px solid #fff", borderRadius:1000, maxHeight:358, maxWidth:358}}>
                        <Image src={BamBam} alt="Blueprint" width={350} height={350} style={{borderRadius:1000}} loading="eager"/>
                    </div>
                    <div className={styles.teamTexts}>
                        <p className={styles.teamName}>BamBam</p>
                        <p className={styles.teamTitle}>Head Analyst</p>

                        <div className={styles.teamFacts} style={{textAlign:"center"}}>
                            <p className={styles.teamFact}>-Lead analysis wolf</p>
                            <p className={styles.teamFact}>-Most considerable and astute strategist</p>
                            <p className={styles.teamFact}>-Always on the relentless pursuit of excellence</p>
                        </div>
                    </div>

                    <div style={{marginTop:30, width:"100%", display:"flex", justifyContent:"flex-end"}}>
                        <Image src={Twitter} alt="Blueprint" width={24} height={24} style={{marginRight:30}} loading="eager" />
                    </div>
                </div>
            </div>

            <div style={{
                borderTop: '3px dashed #fff', // This creates a dashed top border
                width: "100%",
                marginTop: 100,
                color: "#fff",
                display: "flex"
            }}>

            </div>

            <div style={{paddingBottom:140, paddingTop:60, backgroundColor:"#180824"}}>

                <div>
                    <p style={{color:"#fff", fontSize:44, width:"100%", textAlign:"left", marginLeft:200 }}>
                        Were Hiring!
                    </p>
                    <p style={{color:"#fff", textAlign:"left", marginLeft:204, marginTop:8}}>We are expanding our pack with quality staff...</p>
                </div>


                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{display:"flex", gap:40, marginTop:60, alignItems:"center", justifyContent:"flex-start", marginLeft:200}}>
                        <HiringJob available={true} title={"TOKEN ECONOMIST"} description={"Dedicated to the strategic design and implementation of the token's economic model, ensuring a balance between long-term value, utility, and incentivization. Key responsibilities include analyzing token flow, demand-supply dynamics, and integrating economic mechanisms that align with the project's goals."}/>
                        <HiringJob available={true} title={"MARKET ANALYST"} description={"Focused on scrutinizing market trends, collector behavior, and competitive landscapes within the NFT space. This role involves generating insights that inform marketing strategies, pricing models, and sales forecasts, ultimately guiding the project's positioning and market penetration efforts."}/>
                        <HiringJob available={true} title={"NODE DEVELOPER"} description={"Responsible for crafting and maintaining the project's brand identity, messaging, and presence across various channels. The Brand Manager orchestrates campaigns, content, and community engagement to build a strong, consistent brand that resonates with audiences and cultivates loyalty."}/>
                        <HiringJob available={false} title={"SENIOR ANALYST"} description={"Taking on a lead role in analytics, this position requires deep analysis of data sets and performance metrics to drive decision-making. The Senior Analyst will provide recommendations for strategic actions, enhance operational efficiency, and measure the impact of initiatives on project growth and sustainability."}/>
                    </div>

                    <div style={{marginTop:60, marginLeft:60, display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
                        <div style={{
                            width: '0',
                            height: '0',
                            borderTop: '10px solid transparent', /* Top border, transparent */
                            borderBottom: '10px solid transparent', /* Bottom border, transparent */
                            borderLeft: '20px solid #fff', /* Left border, black (arrow color) */
                            display: 'inline-block', /* Makes the div behave like an inline element */
                            marginRight: '80px', /* Optional: if you need some space after the arrow */
                        }}>

                        </div>

                        <div style={{display:"flex", flexDirection:"column"}}>
                            <p style={{color:"#fff"}}> Please apply by email</p>
                            <p style={{color:"#fff"}}>  thebountywolfpack@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Team;