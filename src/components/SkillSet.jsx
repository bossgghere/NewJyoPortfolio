import React from 'react'
import DraggableList from './Viewpager'
import Reveal from './Reveal'
import notes from '../assets/img/notes.png'

function SkillSet() {
    // dragging is a mouse feature; on touch screens the rows stay put so the page can scroll
    const canDrag = typeof window === 'undefined' || !window.matchMedia('(pointer: coarse)').matches
    // [label, items] — keep each line short enough to fit the draggable card
    const arraySkills = [
        ['Languages', 'Python, C++, Java, TypeScript, SQL'],
        ['Frontend', 'React, Next.js, HTML, CSS'],
        ['Backend', 'Node.js, Express, FastAPI, Docker'],
        ['Data', 'MongoDB, MySQL, MSSQL, Redis'],
        ['AI', 'YOLOv8, Gemini API, Streamlit'],
    ]
    return (
        <div id="skills" className="skillSet">
            <Reveal><div className="draggableItems">
                <h1>Variable Skill Set <strong style={{color:"orange"}}>.</strong></h1>
                <div className="idCard skillWindow" style={{display:"flex",flexDirection:"column",border:"2px solid var(--border)",borderRadius:10}}>
                    <div style={{padding:5,width:"100%",backgroundColor:"var(--bar)",fontSize:"150%",borderBottom:"1px solid var(--border)",height:25,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center",justifyContent:"start"}}>
                        <h1 style={{marginTop:10}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                        <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                        <h1 style={{marginTop:10}}><strong style={{color:"#27C841"}}> .</strong></h1>
                        <span className="expFile">skills.sh</span>
                    </div>
                    <div className="skillBody SkillSetItems">
                        <DraggableList items={arraySkills}/>
                    </div>
                </div>
            </div></Reveal>
                <Reveal delay={160}><div className="notesDiv" style={{width:"50%",marginTop:100}}>
                <img className="notes" src={notes} alt="Notes" width="100%"/>
                <p className="cartoonText" style={{fontSize:"150%",color:"orange",textAlign:"center"}}>{canDrag ? 'PS. My Skill set is Literally Variable, Try Dragging and Rearranging one of the Skills :p' : 'PS. My Skill set is Literally Variable, there is always something new on the list :p'}</p>
                </div></Reveal>
        </div>
    )
}

export default SkillSet
