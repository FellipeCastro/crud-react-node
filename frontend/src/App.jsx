import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data)
    } catch (err) {
      console.log(`Erro ao buscar usuários: ${err}`)
    }
  }

  const handleFormSubmit = () => {
    fetchUsers()
  }

  return (
    <>
      <div className="container">
        <h1>USUÁRIOS</h1>
          <Form 
            handleFormSubmit={handleFormSubmit()}
          />
          <Table 
            users={users}
          />
      </div>
    </>
  )
}

export default App
