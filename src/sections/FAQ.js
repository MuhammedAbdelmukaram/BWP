import React, {useState} from 'react';
import CollapsibleFaq from "@/components/CollapsibleFaq";
import styles from '../components/CollapsibleFaq.module.css';
import Image from "next/image";
import Napoleon from "../../public/Napoleon.png";
const Faq = () => {

    const [showImage, setShowImage] = useState(true);
    const [showLoader, setShowLoader] = useState(false);

    const toggleImage = () => {
        setShowImage(false);
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
            setShowImage(true);
        }, 7000); // 5 seconds
    };


    return (
        <div className={styles.redWrapper}>

            <div style={{width:"100%", display:"flex", flexBasis:"0.6", justifyContent:"flex-end", marginRight:0, height:"100%", alignItems:"flex-start", marginLeft:30, paddingBottom:100}}>




                <div className={styles.imageContainer} onClick={toggleImage}>
                    {showImage && (
                        <Image src={Napoleon} alt="Blueprint" width={450} height={450} style={{ borderRadius: 0, border: "3px solid #fff",zIndex: 2 }} loading="eager"/>
                    )}
                    <div style={{ width:"100%", display:"flex", flexDirection: "column", alignItems:"self-start", textAlign:"center" }}>
                        {showLoader && <div className={styles.behindTextTwo}> <p style={{}}>Congratulations! </p></div>}
                        {showLoader && <div className={styles.behindTextTwo}> <p style={{}}>You are one of the first 100 to find this!</p></div>}
                        {showLoader && <div className={styles.behindText}> <p style={{marginBottom:200}}>DM ANY ALPHA WOLF WITH SCREENSHOT OF THIS ON DISCORD FOR WL!</p></div>}
                        {showLoader && <div className={styles.loadingLine}></div>}
                    </div>
                </div>





                <div style={{display:"flex", flexDirection:"column", lineHeight:"1.17", marginRight:20, paddingRight:80, paddingLeft:70, borderRight:"1px solid #fff", }}>
                    <p style={{fontSize:156, marginLeft:36, marginTop:"-32px"}}>F</p>
                    <p style={{fontSize:156, marginLeft:36, marginTop:"-32px"}}>A</p>
                    <p style={{fontSize:156, marginLeft:36, marginTop:"-32px"}}>Q</p>
                </div>



            </div>
            <div style={{display:"flex", flexDirection:"column",gap:14,
                marginRight:"6rem", flexBasis:"0.4", paddingRight:"6rem",

                justifyContent:"center",alignItems:"left", marginLeft:"4rem", marginBottom:100}}>
                <CollapsibleFaq question={"Wen Mint?"} answer={"30.1.2024"}/>
                <CollapsibleFaq question={"What is the total supply of BWP NFTS?"} answer={"555"}/>
                <CollapsibleFaq question={"How much is BWP NFT?"} answer={"1.0 SOL"}/>
                <CollapsibleFaq question={"Which wallet can I use?"} answer={"Phantom, Solflare, Sollet"}/>
                <CollapsibleFaq question={"Where will BWP be listed?"} answer={"Tensor, Magic Eden, SolSea, SolArt, OpenSea"}/>
            </div>
        </div>
    );
};

export default Faq;