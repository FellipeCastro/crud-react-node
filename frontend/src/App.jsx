import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8800')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      console.log(`Erro ao obter dados da API: ${err}`)
    })
  }, [])

  return (
    <>
      <div className="container">
        <h1>USUÁRIOS</h1>
          <Form />
          <Table 
            users={users}
          />
      </div>
    </>
  )
}

export default App
