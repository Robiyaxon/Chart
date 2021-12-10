import clsx from 'clsx'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import SimpleBadge from './Badge'
import flag from "../../picture/flag.png"
import LetterAvatars from '../Header/Avatar/Avatar'
import SearchButton from '../Header/HeaderSearch/HeaderSearch'
import style from './Navbar.module.css'
import '../../App.css'
export function Header(classes, open, handleDrawerOpen) {
  return <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, { [classes.hide]: open, })}>
        <MenuIcon />
      </IconButton>
      {open ?
        <div className={style.headerButton + " " + style.dNone}>
          <SearchButton bol={open} />
          <div className={style.BtnGroup}>
            <img src={flag} alt="" />
            <SimpleBadge  className={style.dNone}/>
            <SupervisorAccountIcon />
            <LetterAvatars />
          </div>
        </div>
        : <div className={style.headerButton}>
          <SearchButton />
          <div className={style.BtnGroup}>
            <img src={flag} alt="" />
            <SimpleBadge />
            <SupervisorAccountIcon />
            <LetterAvatars />
          </div>
        </div>}
    </Toolbar>
  </AppBar>;
}
