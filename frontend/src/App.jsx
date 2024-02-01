import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data) 
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

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
