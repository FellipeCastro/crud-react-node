import './Form.css'

function Form() {
    return (
        <form className='crud-form' autoComplete='off'>
            <div className="input-container">
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome aqui" required />
            </div>
            <div className="input-container">
                <label htmlFor="email">E-mail: </label>
                <input type="email" name="email" id="email" placeholder="Digite seu e-mail aqui" required />
            </div>
            <div className="input-container">
                <label htmlFor="tell">Telefone: </label>
                <input type="text" name="tell" id="tell" placeholder="Digite seu telefone aqui" required />
            </div>
            <div className="input-container">
                <label htmlFor="nasc">Data de nascimento: </label>
                <input type="date" name="nasc" id="nasc" required />
            </div>

            <button type="submit" className='btn'>Salvar</button>
        </form>
    )
}

export default Form
