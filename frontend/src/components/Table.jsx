import { FaEdit, FaTrash } from "react-icons/fa";

import './Table.css'

function Table({users}) {
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
                                <FaEdit />
                                <FaTrash />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
