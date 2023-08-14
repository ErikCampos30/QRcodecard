import React from "react";
import "./styles.css"
export function Qr(){
    return (<div className="container">
        
        <div className="qrcontainer">
        <img src ="./images/image-qr-code.png" alt="QR" width={320} height={320} className="img-qr"/>
        </div>
        <div className="text-container">
            <h1 className="title">Improve your front-end skills by building projects</h1> 
            <h2 className="subtitle">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
        </div>

    </div>)
}
