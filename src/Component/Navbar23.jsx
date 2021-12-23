import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Content } from './Header/Content/Content';
import MainNavbar from './MainNavbar';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#161c24",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#161c24",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    backgroundColor: "#161c24",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    backgroundColor: "#161c24",
  },
  hide: {
    display: 'none',
    backgroundColor: "#161c24",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: "#161c24",
  },
  drawerOpen: {
    backgroundColor: "#161c24",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#161c24",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
export default function Navbar23(props) {
  const classes = useStyles();
  const screen2 = window.innerWidth < 800
  const [open, setOpen] = React.useState(screen2 ? false : true);
  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
}
  return (
    <div className={classes.root}>
      <MainNavbar isAuth={props.isAuth} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div >
          {Content(classes, open, props.isAuth)}
        </div>
      </main>
    </div>
  );
}