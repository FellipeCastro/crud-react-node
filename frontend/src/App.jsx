import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(false)
  const [editedUser, setEditedUser] = useState({
    nome: null,
    email: null,
    fone: null,
    data_nascimento: null
  })

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

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div className="container">
        <h1>USUÁRIOS</h1>
          <Form 
            handleFormSubmit={handleFormSubmit}
            userId={userId}
            setUserId={setUserId}
            editedUser={editedUser}
          />
          <Table 
            users={users}
            handleFormSubmit={handleFormSubmit}
            setUserId={setUserId}
            setEditedUser={setEditedUser}
          />
      </div>
    </>
  )
}

export default App
