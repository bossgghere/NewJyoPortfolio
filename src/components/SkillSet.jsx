import React from 'react'
import DraggableList from './Viewpager'
import notes from '../assets/img/notes.png'

function SkillSet() {
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
            <div className="draggableItems">
                <h1>Variable Skill Set <strong style={{color:"orange"}}>.</strong></h1>
                <div className="SkillSetItems" style={{display:"flex",justifyContent:"space-between",alignItems: "center",width:"120%"}}>
                    <DraggableList items={arraySkills}/>
                </div>
            </div>
                <div className="notesDiv" style={{width:"50%",marginTop:100}}>
                <img className="notes" src={notes} alt="Notes" width="100%"/>
                <p className="cartoonText" style={{fontSize:"150%",color:"orange",textAlign:"center"}}>PS. My Skill set is Literally Variable, Try Dragging and Rearranging one of the Skills :p</p>
                </div>
        </div>
    )
}

export default SkillSet
