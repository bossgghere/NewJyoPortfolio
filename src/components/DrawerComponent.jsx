import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import MyList from './MyList';

// right-hand slide-out menu for small screens
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}><MenuIcon fontSize="large" style={{color:"var(--menuIcon)"}}/></Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          style={{ width: 300, backgroundColor: "var(--backgroundColor)", color: "var(--textcolor)", height: "100%", fontWeight: 500 }}
        >
          <MyList />
        </div>
      </Drawer>
    </div>
  );
}
