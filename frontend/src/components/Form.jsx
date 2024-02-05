import React, { useState } from 'react'
import axios from 'axios'

import './Form.css'

function Form({handleFormSubmit}) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:8800', {
                nome: nome,
                email: email,
                fone: fone,
                data_nascimento: dataNascimento
            })

            // Limpar os dados do form após a submissão
            setNome('')
            setEmail('')
            setFone('')
            setDataNascimento('')

            handleFormSubmit()
        } catch (err) {
            console.log(`Erro ao adicionar usuário: ${err}`)
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
                />
            </div>

            <button type="submit" className='btn'>Salvar</button>
        </form>
    )
}

export default Form
