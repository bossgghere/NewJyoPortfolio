import React from 'react'
import instaPhone from '../assets/img/instaPhone.png'
import instagramQR from '../assets/img/instagramQR.png'

function AboutMe() {
    const [showQR, setShowQR] = React.useState(true)
    const onClose = () => setShowQR(false)

    return (
        <div id="about" style={{display:"flex",alignItems:"center"}}>
            <img className="instaLoop" src={instaPhone} alt="Instagram post on phone" width="30%"/>
            <div className="aboutMe">
                <h1>About Me <strong style={{color:"#f5576c"}}>.</strong></h1>
                <p className="para" style={{width:"70%", marginLeft:"auto",marginRight:"auto"}}>A final-year B.E. Information Technology student at Gokaraju Lailavathi Engineering College (Osmania University), Hyderabad. I build full-stack web apps with Next.js, React, Node.js and FastAPI - from dashboards to REST APIs - and I enjoy understanding how systems behave under real use. Currently interning at Algo Chowk, with 250+ LeetCode problems solved along the way.
                <br/>
                <br/>
                Before that, I built role-based analytics dashboards for a marine-parts ERP at Euroasiann Group, and shipped features on a production Next.js app at Pragmatiq Systems.</p>
                <br/>
                <br/>
                <p className="cartoonText" style={{fontSize:"150%",color:"#f5576c",textAlign:"left"}}> ~ Hey, That's me!</p>

                {
                    showQR ?

                <div className="idCard idCard2" style={{marginLeft:"auto",marginRight:"auto",width:"70%",display:"flex",flexDirection:"column",marginTop:30,border:"2px solid lightgrey",borderRadius:10}}>
                        <div style={{padding:5,width:"100%",backgroundColor:"#ededed",fontSize:"150%",borderBottom:"1px solid lightgrey",height:25,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center",justifyContent:"start"}}>
                            <h1 onClick={onClose} style={{zIndex:50,marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#27C841"}}> .</strong></h1>
                        </div>
                        <a href="https://www.instagram.com/jyoshika945">
                        <div style={{display:"flex", alignItems: 'center',padding:20}}>
                            <img src={instagramQR} className="dp2" alt="Instagram QR code" />
                            <div className="instaTag" style={{padding:20 , fontSize:"80%"}}>
                                <h1>@jyoshika945</h1>
                                <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>Scan my instagram QR Code!</h3>
                            </div>
                        </div>
                        </a>
                </div>

                :

                <br/>

                }

            </div>
        </div>
    )
}

export default AboutMe
