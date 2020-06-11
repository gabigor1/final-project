import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      first_name: '',
      last_name: '',
      username: '',
      profile_image: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    const errors = { ...this.state.errors, [event.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await registerUser(this.state.formData)
      console.log(res.data)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({ errors: err.response.data })
    }
  }

  render() {
    const { formData, errors }  = this.state
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className={`input ${errors.first_name ? 'is-danger' : '' }`}
                    placeholder="First Name" 
                    name="first_name"
                    onChange={ this.handleChange }
                    value={ formData.first_name }
                  />
                </div>
                {errors.first_name && <small className="help is-danger">{errors.first_name}</small>}
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className={`input ${errors.last_name ? 'is-danger' : '' }`}
                    placeholder="Last Name" 
                    name="last_name"
                    onChange={ this.handleChange }
                    value={ formData.last_name }
                  />
                </div>
                {errors.last_name && <small className="help is-danger">{errors.last_name}</small>}
              </div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className={`input ${errors.username ? 'is-danger' : '' }`}
                    placeholder="Username" 
                    name="username"
                    onChange={ this.handleChange }
                    value={ formData.username }
                  />
                </div>
                {errors.last_name && <small className="help is-danger">{errors.last_name}</small>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className={`input ${errors.email ? 'is-danger' : '' }`}
                    placeholder="Email" 
                    name="email"
                    onChange={ this.handleChange }
                    value={ formData.email }
                  />
                </div>
                {errors.email && <small className="help is-danger">{errors.email}</small>}
              </div>
              <div className="field">
                <label className="label">Profile Image</label>
                <div className="control">
                  <input
                    className={`input ${errors.profile_image ? 'is-danger' : '' }`} 
                    placeholder="URL Image" 
                    name="profile_image"
                    onChange={ this.handleChange }
                    value={ formData.profile_image }
                  />
                </div>
                {errors.profile_image && <small className="help is-danger">{errors.profile_image}</small>}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password ? 'is-danger' : '' }`} 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                  />
                </div>
                {errors.password && <small className="help is-danger">{errors.password}</small>}
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    type="password" 
                    className={`input ${errors.password_confirmation ? 'is-danger' : '' }`} 
                    placeholder="Password Confirmation" 
                    name="password_confirmation"
                    onChange={this.handleChange}
                    value={formData.password_confirmation}
                  />
                </div>
                {errors.passwordConfirmation && <small className="help is-danger">{errors.password_confirmation}</small>}
              </div>
              <div className="field">
                <button type="submit"className="button is-fullwidth is-rounded is-info">Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

}

export default Register