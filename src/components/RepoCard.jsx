import React from 'react'

function RepoCard({repo}) {

  return (
   <div className='repo-card'>
   <h3>{repo.name}</h3>
   </div>
  )
}

export default RepoCard