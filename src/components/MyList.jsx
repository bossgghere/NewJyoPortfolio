import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import dp from '../assets/img/dp.jpg';

const linkStyle = { color: "#000", opacity: 0.5, display: "flex", alignItems: "center", textDecoration: "none" };

function MyList() {
  return (
    <List>
      <Avatar
        src={dp}
        style={{height:100 , width:100 , marginRight:"auto" , marginLeft:"auto" , marginBottom:"10px",marginTop:"30px"}}
      />
      {[['about', 'About'], ['experience', 'Experience'], ['skills', 'Skills'], ['projects', 'Projects'], ['socials', 'Socials']].map(([id, label]) => (
        <a key={id} href={`/#${id}`} className="headernav" style={linkStyle}>
          <ListItem>
            <ListItemText primary={label} />
          </ListItem>
        </a>
      ))}
      <hr style={{color:"#636262" , width:"90%", opacity:0.2}}/>
    </List>
  );
}

export default MyList;
