import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import '../../../App.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: `rgb(255, 193, 7)`,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose} style={{color:"white"}}>Robiya</MenuItem>
        <MenuItem onClick={handleClose} style={{color:"white"}}>Home</MenuItem>
        <MenuItem onClick={handleClose} style={{color:"white"}} >Settings</MenuItem>
      </Menu>
     <div className={classes.root + " " + "dnone"} >
            <Avatar style={{cursor:"pointer"}} onClick={handleClick} className={classes.orange}>R</Avatar>
          </div>
    </>
         
        );
      }