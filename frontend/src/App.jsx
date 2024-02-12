import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState(null)
  const [editedUser, setEditedUser] = useState({
    nome: '',
    email: '',
    fone: '',
    data_nascimento: ''
  })

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data)
    } catch (err) {
      console.log(`Erro ao buscar usuários: ${err}`)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div className="container">
        <h1>USUÁRIOS</h1>
          <Form 
            fetchUsers={fetchUsers}
            userId={userId}
            setUserId={setUserId}
            editedUser={editedUser}
            setEditedUser={setEditedUser}
          />
          <Table 
            users={users}
            fetchUsers={fetchUsers}
            userId={userId}
            setUserId={setUserId}
            setEditedUser={setEditedUser}
          />
      </div>
    </>
  )
}

export default App
