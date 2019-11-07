import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <>
      <footer className="w3-center w3-padding-16" style={{ position: 'fixed', width: '100vw', bottom: '0', backgroundColor: '#009999' }}>
        <i className="w3-xlarge fa fa-facebook-official w3-hover-opacity" style={{ color: '#fff', margin: '5px', padding: '5px' }}></i>
        <i className="w3-xlarge fa fa-instagram w3-hover-opacity" style={{ color: '#fff', margin: '5px' }}></i>
        <i className="w3-xlarge fa fa-twitter w3-hover-opacity" style={{ color: '#fff', margin: '5px' }}></i>
        <i className="w3-xlarge fa fa-linkedin w3-hover-opacity" style={{ color: '#fff', margin: '5px' }}></i>
      </footer>
      </>
    )
  }
}

export default Footer
