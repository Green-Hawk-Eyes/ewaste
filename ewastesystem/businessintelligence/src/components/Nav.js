import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import Logo from '../Steinfield.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'white',
    color: 'green',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
  },
  title: {
    flexGrow: 1,
  },
  logo: {
      width: '7.5rem',
      height: '2.5rem'
  },
  navItems: {
      textDecoration: 'none',
      color: '#3cb23a',
      marginLeft: '1vw'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar >
            <Link to='/' className={classes.title}>
                <img src={Logo}  className={classes.logo} alt="Logo"/>
            </Link>
         <Link to='/dashboard' className={classes.navItems}>Dashboard</Link>
         <Link to='/predictions' className={classes.navItems}>Prediction</Link>
          <Link to='/ref' className={classes.navItems}>Reference</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
