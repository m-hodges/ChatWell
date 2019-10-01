import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// import Button from './elements/Button'
import { isAuthenticated, register } from 'authenticare/client'

import { randomName, randomAvatar } from '../utilities'
import { setUsername } from '../actions/username'
import { GridForm, ColOne, ColTwo } from './Styled'
import Header from './Header'
import TitleArea from './elements/TitleArea'
import Footer from './Footer'
import Button from './elements/Button'
import { getUserType } from '../actions/typeOfUser'

const theme = {
  primary: '#618685',
  secondary: '#4040a1',
  font: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
}


class SponsorSignUp extends React.Component {
  state = {
    username: randomName(),
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegister = (event) => {
    this.props.dispatch(getUserType('registeredSponsor'))
    register({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(setUsername(this.state.username))
          // this.props.history.push('/sponsor/guidance')
        }
      })
  }

  generateUsername = () => {
    this.setState({
      username: randomName()
    })
  }

  render () {
    return (
      <div className="hero flex-center">
        <ThemeProvider theme={theme}>
          <Header />
          <TitleArea style={{ fontColor: '#6262B2', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' }}>Choose your nickname and password. You can also randomise a nickname by clicking the button below.</TitleArea>
          <br />
          <Button style={{ fontFamily: 'Lato', fontWeight: 'bold' }} color="primary" name="generateUsername" value="generateUsername"
            onClick={ (e) => { this.generateUsername() }}>RANDOM USERNAME</Button>
          <br />
          <div className="input">
            <input type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}/>
          </div>
          <div className="input">
            <input type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}/>
          </div>
          {(this.state.username === '') ? <p className="sponsor-font" style={{ textAlign: 'center' }}>If this field is left empty username defaults to 'Anonymous'</p> : null}
          <br />
          <Link to='/sponsor/topics' style={{ textDecoration: 'none' }}><Button color="primary" onClick={this.handleRegister} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>REGISTER</Button></Link>
          <br />
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="secondary" onClick={this.handleSponsor} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>BACK TO MAIN</Button></Link>
          <br />
          <Footer />
        </ThemeProvider>
      </div>
    )
  }
}

export default connect()(SponsorSignUp)
