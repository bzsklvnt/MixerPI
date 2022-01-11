import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'

export default function NavigationBar(props) {
  function logOut() {
    props.setLoggedIn(false)
  }

  const [open, setOpen] = useState(false);

  const openIcon = <MenuIcon
    className="menu"
    style={{ color: "#77797c" }}
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <CloseIcon
    className="menu"
    style={{ color: 'white' }}
    onClick={() => setOpen(!open)}
  />

  const closeMenu = () => setOpen(false)
  const animateFrom = { opacity: 0 }
  const animateTo = { opacity: 0.95 }
  return (
    <div className='NavBar'>
      <nav className="NavBar smap-primary-1 unselectable">
        {open ? closeIcon : openIcon}
        {open && <motion.ul
          initial={animateFrom}
          animate={animateTo}>

          {props.user.is_superuser && (
            <li onClick={() => closeMenu()}>
              <Link to={("/admin-site")} onClick={props.setIsAdmin(true)} className="nav-item nav-link white pressable">Admin</Link>
            </li>
          )}
          <li onClick={() => closeMenu()}>
            <Link to={("/")} className="nav-item nav-link white pressable">Cocktails</Link>
          </li>
          <li onClick={() => closeMenu()}>
            <Link to={("/")} onClick={logOut} className="nav-item nav-link white pressable">Logout</Link>
          </li>
        </motion.ul>}
      </nav>
    </div>
  )
}
