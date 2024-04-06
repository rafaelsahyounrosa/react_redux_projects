import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState(0)
  const [tipo, setTipo] = useState(enums.Tipo.TRABALHO)

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        nome,
        tipo,
        email,
        numero,
        favorito: enums.Favorito.NORMAL
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          as="textarea"
          placeholder="email"
        ></Campo>
        <Campo
          value={numero}
          onChange={(e) => setNumero(parseInt(e.target.value))}
          placeholder="numero"
          type="number"
        ></Campo>
        <Opcoes>
          <p>Tipo</p>
          {Object.values(enums.Tipo).map((tipo) => (
            <Opcao key={tipo}>
              <input
                value={tipo}
                type="radio"
                name="tipo"
                id={tipo}
                defaultChecked={tipo === enums.Tipo.TRABALHO}
                onChange={(e) => setTipo(e.target.value as enums.Tipo)}
              />
              <label htmlFor={tipo}>{tipo}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
