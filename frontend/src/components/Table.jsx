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
                {users.map((item, i) => {
                    <tr key={i}>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.fone}</td>
                        <td>
                            <FaEdit />
                            <FaTrash />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table
