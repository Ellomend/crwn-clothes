import React, { Component } from 'react';

import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }


  render () {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name='email'
            label='email'
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name='password'
            label='password'
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type='submit'>
              Submit Form
            </CustomButton>
            <CustomButton
              type='submit'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
