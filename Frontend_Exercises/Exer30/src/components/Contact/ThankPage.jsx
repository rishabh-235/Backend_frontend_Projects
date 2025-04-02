import React from 'react'

export default function ThankPage(props) {
  return (
    <>
    <div className='thankpage-container'>
    </div>

    <div className='greet-box roboto'>
        <h2>Thank You</h2>
        <h3>{props.name}</h3>
    </div>
    </>
  )
}
