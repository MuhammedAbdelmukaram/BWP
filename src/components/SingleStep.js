import React from 'react';
import Image from "next/image";
import yourIconImage from "../../public/PFP.png";

const SingleStep = ({icon, text}) => {

    return (
        <div style={{display:"flex", alignItems:"center", marginTop:6}}>


                <Image src={icon}  alt="Icon" width={20} height={20} loading="eager"/>


            <div style={{marginLeft:12}}>
                <p style={{color:"#000", fontSize:14, fontFamily:"cursive"}}>{text} </p>
            </div>

        </div>
    );
};

export default SingleStep;