import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = event => {
    try {
      const formData = { ...this.state.formData, [event.target.name]: event.target.value }
      this.setState({ formData, error: '' })
    } catch (err) {
      console.log(err)
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token)
      console.log(res.data.token)
      this.props.history.push('/films')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {
    const { formData, error }  = this.state
    console.log(this.state)
    return (
      <section className="section">
        <div className="containers">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className={`input ${error ? 'is-danger' : '' }`}
                    placeholder="Email" 
                    name="email"
                    onChange={this.handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${error ? 'is-danger' : '' }`}
                    type="password"
                    placeholder="Password" 
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                  />
                  {error && <small className="help is-danger">{error}</small>}
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-rounded is-info">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login