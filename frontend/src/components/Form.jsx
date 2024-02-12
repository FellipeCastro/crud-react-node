import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Form.css'

function Form({fetchUsers, userId, setUserId, editedUser}) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    useEffect(() => {
        setNome(editedUser.nome);
        setEmail(editedUser.email);
        setFone(editedUser.fone);
        setDataNascimento(editedUser.data_nascimento);
    }, [editedUser])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (userId) {
                await axios.put(`http://localhost:8800/${userId}`, {
                    nome: nome,
                    email: email,
                    fone: fone,
                    data_nascimento: dataNascimento
                })
            } else {
                await axios.post('http://localhost:8800', {
                    nome: nome,
                    email: email,
                    fone: fone,
                    data_nascimento: dataNascimento
                })
            }

            // Atualizar a tabela após a submissão
            fetchUsers()

            // Limpar os dados do form após a submissão
            setNome('')
            setEmail('')
            setFone('')
            setDataNascimento('')

            // Resetar o userId para criar um novo usuário na próxima vez
            setUserId(null)
        } catch (err) {
            console.log(`Erro ao adicionar/editar usuário: ${err}`)
        }
    }

    return (
        <form className='crud-form' autoComplete='off' onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="nome">Nome: </label>
                <input 
                    type="text" 
                    name="nome" 
                    id="nome" 
                    placeholder="Digite seu nome aqui" 
                    required 
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
            </div>
            <div className="input-container">
                <label htmlFor="email">E-mail: </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Digite seu e-mail aqui" 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="input-container">
                <label htmlFor="tell">Telefone: </label>
                <input 
                    type="text" 
                    name="tell" 
                    id="tell" 
                    placeholder="Digite seu telefone aqui" 
                    required 
                    onChange={(e) => setFone(e.target.value)}
                    value={fone}
                />
            </div>
            <div className="input-container">
                <label htmlFor="nasc">Data de nascimento: </label>
                <input 
                    type="date" 
                    name="nasc" 
                    id="nasc" 
                    required 
                    onChange={(e) => setDataNascimento(e.target.value)} 
                    value={dataNascimento}
                />
            </div>

            <button type="submit" className='btn'>
                {userId ? 'Editar' : 'Salvar'}
            </button>
        </form>
    )
}

export default Form
