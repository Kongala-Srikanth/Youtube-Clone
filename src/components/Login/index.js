import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'

import {
  LoginBackground,
  LoginCard,
  LoginPageLogo,
  LoginInput,
  Label,
  LabelShowPassword,
} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showPassword: false}

  onEnterUsername = event => this.setState({username: event.target.value})

  onEnterPassword = event => this.setState({password: event.target.value})

  onShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  onLoginAccount = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30, path: '/'})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {errorMsg, showPassword} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtContext.Consumer>
        {value => {
          const {isLightMode} = value

          return (
            <LoginBackground bgColor={isLightMode}>
              <LoginCard bgColor={isLightMode} shadowEffect={isLightMode}>
                {isLightMode ? (
                  <LoginPageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LoginPageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}

                <form className="form-container" onSubmit={this.onLoginAccount}>
                  <Label color={isLightMode} htmlFor="username">
                    USERNAME
                  </Label>
                  <LoginInput
                    bgColor={isLightMode}
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.onEnterUsername}
                  />
                  <Label color={isLightMode} htmlFor="password">
                    PASSWORD
                  </Label>
                  <LoginInput
                    bgColor={isLightMode}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                    onChange={this.onEnterPassword}
                  />
                  <div className="show-password-container">
                    <input
                      type="checkbox"
                      className="check-box"
                      id="showPassword"
                      onClick={this.onShowPassword}
                    />
                    <LabelShowPassword htmlFor="showPassword">
                      Show Password
                    </LabelShowPassword>
                  </div>
                  <button type="submit" className="login-btn">
                    Login
                  </button>
                </form>
                <p className="error-msg">{errorMsg}</p>
              </LoginCard>
            </LoginBackground>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Login
