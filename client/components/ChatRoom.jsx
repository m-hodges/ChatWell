import React, { Component } from 'react'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')

export default class ChatRoom extends Component {
  constructor(props) {
    super(props)
    socket.on('new message', (message) => {
      this.setState({
        messages: [...this.state.messages, message]
      })
    })
  }

  state = {
    message: '',
    socket: null,
    user: null,
    messages: []
  }

  componentWillMount() {
      this.initSocket()
    //   this.setUser()
  }

  initSocket = () => {
      socket.on('connect', () => {
          console.log("Connected to Client")
      })
      this.setState({
          socket
      })
  }

  // setUser = (user) => {
  //   const socket = this.state.socket
  //   // const user = socket.id
  //   socket.emit('user connected', user)
  //   this.setState({
  //       user
  //   })
  // }

  onChangeHandler = (evt) => {
    this.setState({
      message: evt.target.value
    })
  }

  onClickHandler = (evt) => {
    evt.preventDefault()
    socket.emit('send message', this.state.message)
    this.setState({
      message: ''
    })
  }

  // disconnectHandler = () => {
  //   evt.preventDefault()
  //   socket.leave()
  // }

  render () {
    return (
      <>
        <h1>This is the socket component</h1>
        <h2>Messages:</h2>
        {this.state.messages.map((message, i) => {
          return <p key={i}>{message}</p>
        })}
        <input type="text" value={this.state.message} onChange={this.onChangeHandler}/>
        <button type="submit" onClick={this.onClickHandler}>Send</button>
        <br />
        {/* <button type="submit" onClick={this.disconnectHandler}>Disconnect</button> */}
      </>
    )
  }
}