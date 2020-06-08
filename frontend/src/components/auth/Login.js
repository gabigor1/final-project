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
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: '' })
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
    const { formData }  = this.state
    console.log(this.state)
    return (
      <section>
        <div>
          <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
            <div>
              <label>Email</label>
              <input
                placeholder="Email" 
                name="email"
                onChange={this.handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password" 
                name="password"
                onChange={this.handleChange}
                value={formData.password}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login