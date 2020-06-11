import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

class Navbar extends React.Component {

  handleLogout = () => {
    logout()
    this.props.history.push('/login')
  }

  render() {
    return (
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/films" className="navbar-item">Films Index</Link>
            {isAuthenticated() && <Link to="/films/new" className="navbar-item">Post a Film</Link>}
          </div>
          <div className="navbar-end">
            {!isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
            {!isAuthenticated() && <Link to="/login" className="navbar-item">Log In</Link>}
            {isAuthenticated() && <span onClick={this.handleLogout} className="navbar-item">Logout</span>}
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)