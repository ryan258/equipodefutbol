import React from 'react'
// we can't use <a> w/ react-router-dom, so we must use <Link>
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Button } from '@material-ui/core'
import { CityLogo, logoutHandler } from '../Utils/tools'

// import

const Header = ({ user, history }) => {
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
          <div className="header_logo">
            <CityLogo //
              link={true}
              linkTo={'/'}
              width="70px"
              height="70px"
            />
          </div>
        </div>
        <Link to="/the_team">
          <Button color="inherit">The team</Button>
        </Link>
        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
        {user && (
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>

            <Button color="inherit" onClick={() => logoutHandler()}>
              Log out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
