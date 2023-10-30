import React from 'react'
import Login from '../Login/Login'

const MainImage = (props) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundImage: `URL(${props.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ccc'
    }}>
      <div style={{
        margin: '100px auto',
        maxWidth: '300px',
        backgroundColor: '#fff',
      }}>
        <Login />
      </div>
    </div>
  )
}

export default MainImage
