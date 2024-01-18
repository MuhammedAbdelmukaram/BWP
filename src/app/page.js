"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Header from "@/sections/Header";
import NFT from "/public/preview.gif";
import Discord from "/public/discord.png"
import bullet1 from "/public/1.png"
import bullet2 from "/public/2.png"
import bullet3 from "/public/3.png"
import bullet4 from "/public/4.png"
import Twitter from "/public/twitter.png"
import Blueprint from "/public/Blueprint.png"
import Deity from "/public/Deity.png"
import CountdownTimer from "@/components/CountdownTimer";
import dynamic from "next/dynamic";
import CollapsibleCard from "@/components/CollapsibleCard";
import Team from "@/sections/Team";
import Roadmap from "@/sections/Roadmap";
import AnnouncementBar from "@/sections/AnnouncementBar";
import FAQ from "@/sections/FAQ";
import React, {useState} from "react";
import Modal from "@/components/Modal";
import LoginModal from "@/components/LoginModal";
import Whitelist from "@/sections/Whitelist";
import NFTview from "@/components/NFTview";


const Home = () => {

    const CountdownTimer = dynamic(
        () => import('@/components/CountdownTimer'),
        {ssr: false}
    );


    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);


    const toggleLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
    };

    const targetDate = '2024-01-30T21:00:00';


    // State for controlling the modal
    const [isModalOpen, setIsModalOpen] = useState(false);


    const [isNFTModalOpen, setIsNFTModalOpen] = useState(false);
    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openNFTModal = () => {
        setIsNFTModalOpen(true);
    };
    const closeNFTModal = () => {
        setIsNFTModalOpen(false);
    };

    return (
        <main>
            <div style={{display: "block", width: "100%",}}>
                <AnnouncementBar/>
                <NFTview isOpen={isNFTModalOpen} onClose={closeNFTModal}/>


                <Modal isOpen={isModalOpen} onClose={closeModal}/>
                <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />


                <Header onLoginClick={toggleLoginModal} />

            </div>
            <div className={styles.main} id="home">
                <div className={styles.innerMain}>

                    <div onClick={openModal}>
                        {<CountdownTimer targetDate={targetDate}/>}
                    </div>


                    <div className={styles.description}>
                        <p className={styles.heading}>Bounty Wolf Pack</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://twitter.com/BountyWolfPack" target="_blank" rel="noopener noreferrer" style={{marginRight:"0.5rem", cursor:"pointer"}} className={styles.social}>
                            <Image src={Twitter} alt="Twitter" width={30} height={30} loading="eager"/>
                        </a>
                        <a href="https://discord.gg/hbhYGPf7sw" target="_blank" rel="noopener noreferrer" style={{ cursor:"pointer"}} className={styles.social}>
                            <Image src={Discord} alt="Discord" width={30} height={30} loading="eager"/>
                        </a>

                    </div>




                    <div className={styles.lower}>

                        <div className={styles.lowerInner}>

                            <div className={styles.gif} onClick={openNFTModal}>
                                <Image src={NFT} alt="NFT Preview" width={540} height={540} loading="eager"/>
                            </div>
                        </div>


                        <div className={styles.headingHero}>
                            <p style={{fontSize: 48,}}>NFT Holders priviledges:</p>

                            <div style={{marginTop: "2rem", paddingBottom: "3rem"}}>
                                <div style={{display: "flex", alignItems: "center", padding: 20}}>
                                    <Image src={bullet1} alt="Description of GIF" width={80} height={80} loading="eager"/>
                                    <div style={{marginLeft: 40}}>
                                        <p className={styles.smallHeading}>Get exclusive access:</p>
                                        <p className={styles.lessIndented}>Analyses of upcoming bullish projects (NFT &
                                            Coins)</p>
                                        <p className={styles.lessIndented}>Alpha calls for spiking meme coins</p>
                                    </div>
                                </div>

                                <div style={{display: "flex", alignItems: "center", padding: 20}}>
                                    <Image src={bullet2} alt="Description of GIF" width={80} height={80} loading="eager"/>
                                    <div style={{marginLeft: 40}}>
                                        <p className={styles.smallHeading}>Get payouts:</p>
                                        <p className={styles.lessIndented}>55% of secondary profits will fund our Wolf
                                            Vault.
                                            Each
                                            holder will receive monthly airdrops of $WOLFIE</p>
                                    </div>
                                </div>

                                <div style={{display: "flex", alignItems: "center", padding: 20}}>
                                    <Image src={bullet3} alt="Description of GIF" width={80} height={80} loading="eager"/>
                                    <div style={{marginLeft: 40}}>
                                        <p className={styles.smallHeading}>Have a say:</p>
                                        <p className={styles.lessIndented}>Each holder will vote on future of the
                                            enterprise,
                                            and
                                            opportunities</p>
                                    </div>
                                </div>

                                <div style={{display: "flex", alignItems: "center", padding: 20}}>
                                    <Image src={bullet4} alt="Description of GIF" width={80} height={80} loading="eager"/>
                                    <div style={{marginLeft: 40}}>
                                        <p className={styles.smallHeading}>Get smug PFP:</p>
                                        <p className={styles.lessIndented}>One of the freshest out there</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div style={{backgroundColor: "#0a0a0a", display: "none"}}>
                        <Image src={Blueprint} alt="Blueprint" width={700} height={700} loading="eager"/>
                    </div>


                </div>

                <Whitelist/>

                <div className={styles.team} style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center"
                }}>


                    <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop:"12rem"}} id="roadmap">
                        <div style={{
                            height: 170,
                            width: 450,
                            backgroundColor: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <p style={{color: "#b30000", fontSize: 42}}>ROADMAP</p>
                            <p style={{color: "#000", fontSize: 18}}>Wooooooo...</p>
                        </div>
                    </div>

                    <div style={{paddingBottom:100}} >
                        <Roadmap/>
                    </div>


                    <div id="team">
                        <Team/>
                    </div>

                    <div id="faqSection">
                        <FAQ/>
                    </div>


                </div>


            </div>


        </main>
    )
}

export default Home;