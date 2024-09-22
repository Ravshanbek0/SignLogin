import React from 'react'

function Home({user}) {
  console.log(user);
  return (
    <div>
      <h2>{user?.displayName}</h2>
    </div>
  )
}

export default Home