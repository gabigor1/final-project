import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/films" className="navbar-item">Films Index</Link>
            <Link to="/login" className="navbar-item">Log In</Link>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)