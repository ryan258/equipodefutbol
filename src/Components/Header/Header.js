import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
// we can't use <a> w/ react-router-dom, so we must use <Link>
import { Link } from 'react-router-dom'

// import

const Header = () => {
  return (
    <AppBar //
      position="fixed"
      style={{
        backgroundColor: '#98c5e9',
        boxShadow: 'none',
        padding: '10px 0',
        borderBottom: '2px solid #00285e'
      }}
    >
      <Toolbar
        style={{
          display: 'flex'
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">logo</div>
        </div>
        <Link to="/the_team">
          <Button color="inherit">The team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
        <Link to="/dashboard">
          <Button color="inherit">Dashboard</Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
