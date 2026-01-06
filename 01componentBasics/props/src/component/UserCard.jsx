import React from 'react'

const UserCard = ({name,role,photo}) => {
    
  return (
    <div className='usercard'>
      <img src={photo} alt="image1"/>
      <h1>Name : {name} </h1>
      <h2>Role : {role}</h2>
    </div>
  )
}

export default UserCard
