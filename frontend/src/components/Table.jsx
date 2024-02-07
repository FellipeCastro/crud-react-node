import axios from 'axios'

import { FaEdit, FaTrash } from "react-icons/fa"

import './Table.css'

function Table({users, fetchUsers, setUserId, setEditedUser}) {
    
    const updateUser = (user) => {
        setUserId(user.id)

        setEditedUser({
            nome: user.nome,
            email: user.email,
            fone: user.fone,
            data_nascimento: new Date(user.data_nascimento).toISOString().split('T')[0]
        })
    }
    
    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/${id}`)
            fetchUsers()
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
                    <th>Telefone</th>
                    <th colSpan={2}>Data de nascimento</th>
                </tr>
            </thead>

            <tbody>
                {users.map((user, i) => {
                    const formattedDate = new Date(user.data_nascimento).toLocaleDateString('pt-BR')

                    return (
                        <tr key={i}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.fone}</td>
                            <td>{formattedDate}</td>
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
