import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Small popup: preview image, short description, and a GitHub button
function DialogProjects({ title, imgSrc, description, tags, github, live, defaultOpen = false }) {
    const [open, setOpen] = React.useState(defaultOpen);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="projectCard" onClick={() => setOpen(true)}>
              <img src={imgSrc} alt={title} style={{width:"100%",height:"100%",borderRadius:7}}/>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
              <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                <div style={{padding:5,width:"100%",backgroundColor:"#f0f0f0",fontSize:"150%",borderBottom:"1px solid lightgrey",height:30,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center"}}>
                    <h1 onClick={handleClose} style={{zIndex:50,marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                    <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                    <h1 style={{marginTop:10}}><strong style={{color:"#27C841"}}> .</strong></h1>
                </div>
                <img src={imgSrc} alt={title} style={{width:"100%",display:"block"}}/>
                <div className="projectPop instaTag">
                    <h1 style={{margin:"0 0 6px 0"}}>{title}</h1>
                    <div className="popTags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
                    <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.45,marginTop:10}}>{description}</h3>
                    <div className="popActions">
                        <a href={github} target="_blank" rel="noreferrer"><button className="btn"><FontAwesomeIcon icon={faGithub} /> View on GitHub</button></a>
                        {live ? <a href={live} target="_blank" rel="noreferrer"><button className="btn2">Live demo</button></a> : null}
                    </div>
                </div>
              </div>
            </Dialog>
        </div>
    )
}

export default DialogProjects
