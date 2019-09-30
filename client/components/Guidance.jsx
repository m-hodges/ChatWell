import React from 'react'
import { Link } from 'react-router-dom'

function Guidance (props) {
  return (
    <div>
      <h2>User Responsibility</h2>
      <p>
        This app is intended for support purposes only. It is not intended for use in the diagnosis of conditions or for providing professional advice - remember you are speaking to another human who has been through a lot, so be kind. If you are at risk in any way, please seek the advice of healthcare professionals. (Provide helpline numbers and contacts)
      </p>
      {' '}
      <Link className='pure-button' to='/'>Back to main</Link>
      {' '}
      <Link className='pure-button' to='/pair'>Continue</Link>
    </div>
  )
}

export default Guidance
