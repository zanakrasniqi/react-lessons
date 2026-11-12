import React from 'react'

function Users({users}) {
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.phone}</p>
          <p>{user.email}  </p>
          <address>{user.address.geo.lat}</address>
        </div>
      ))}
    </div>
  )
}

export default Users