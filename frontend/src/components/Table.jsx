import axios from 'axios'

import { FaEdit, FaTrash } from "react-icons/fa"

import './Table.css'

function Table({users, handleFormSubmit, setUserId, setEditedUser}) {
    
    const updateUser = (user) => {
        setUserId(user.id)

        setEditedUser({
            nome: user.nome,
            email: user.email,
            fone: user.fone,
            data_nascimento: user.data_nascimento
        })
    }
    
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/${id}`)
            handleFormSubmit()
        } catch (err) {
            console.log(`Erro ao excluir usuário: ${err}`)
        }
    }

    return (
        <table className="crud-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th colSpan='2'>Telefone</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.fone}</td>
                            <td>
                                <FaEdit 
                                    onClick={() => updateUser(user)}
                                />
                                <FaTrash
                                    onClick={() => deleteUser(user.id)}
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
