import React from 'react';
import flag from "../../picture/flag.png";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const Flag = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} style={{color:"white",backgroundColor:"#595f663d"}}>English</MenuItem>
        <MenuItem onClick={handleClose} style={{color:"white",backgroundColor:"#595f663d"}}>Uzbek</MenuItem>
        <MenuItem onClick={handleClose} style={{color:"white",backgroundColor:"#595f663d"}}>German</MenuItem>
      </Menu>
      <img src={flag} style={{cursor:"pointer"}} onClick={handleClick} alt="" />
    </div>
  );
};
