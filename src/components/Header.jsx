import React, { useEffect, useState } from 'react';
import DrawerComponent from './DrawerComponent';

// smooth-scroll to a section id without changing the URL
const scrollTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function Header() {
  // phones get the drawer menu, wider screens get inline links
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 800);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 799px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <div style={{display:"flex",padding:0,paddingLeft:20,top:0,position:"fixed",zIndex:100,backgroundColor:"#fff",width:"100vw",borderBottom:"1px solid #ededed"}}>
      <h1 style={{textAlign:"left",width:"auto"}}>Portfolio <strong style={{color:"red"}}>.</strong></h1>
      <div style={{display:'flex',paddingRight:10,alignItems:"center",marginLeft:"auto",justifyContent:"end"}}>
        <span style={{display: isMobile ? 'none' : 'flex'}}>
          <a href='/' onClick={scrollTo('about')}><p className="headernav">About</p></a>
          <a href='/' onClick={scrollTo('experience')}><p className="headernav">Experience</p></a>
          <a href='/' onClick={scrollTo('skills')}><p className="headernav">Skills</p></a>
          <a href='/' onClick={scrollTo('projects')}><p className="headernav">Projects</p></a>
          <a href='/' onClick={scrollTo('socials')}><p className="headernav">Socials</p></a>
        </span>
        <span style={{display: isMobile ? 'flex' : 'none'}}>
          <DrawerComponent />
        </span>
      </div>
    </div>
  );
}

export default Header;
