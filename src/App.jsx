import React from 'react'
import { useEffect, useState } from 'react'
import Users from './components/Users.jsx'

function App() {
  const [users, setUsers]= useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((res) => {console.log(res); 
        setUsers(res)})
      .catch((error) => setError(error))
  }, [])
  return (
    <div>
      <h1>Test</h1>
      <Users users={users} />
        <p>
            {error}
          </p>
    </div>
  )
}

export default App
//detyre shtepie mas pari kena me shfaq sa elemente ose gjatesin e elementeve ne home page sa poste jane sa komente sa foto
//ne postet  shfaq postet 
// mi shfaq komentet ne page comments
//shfaq images ne page images
//te ndertohet rounting me pages, App.jsx te jete sa me clean.