import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { BotaoSalvar, Botao } from '../../styles'
import { remover, editar, alteraFavorito } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  email: emailOriginal,
  tipo,
  favorito,
  nome,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [numero, setTelefone] = useState(0)

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (numeroOriginal > 0) {
      setTelefone(numeroOriginal)
    }
  }, [numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
  }

  function alteraFavoritoTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraFavorito({
        id,
        favorito: evento.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={favorito === enums.Favorito.FAVORITO}
          onChange={alteraFavoritoTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Titulo>
      </label>
      <S.Tag parametro="tipo" tipo={tipo}>
        {tipo}
      </S.Tag>
      <S.Tag parametro="favorito" favorito={favorito}>
        {favorito}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.NumeroInput
        disabled={!estaEditando}
        type="number"
        placeholder="Insira o numero"
        value={numero}
        onChange={(evento) => setTelefone(parseInt(evento.target.value))}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    tipo,
                    favorito,
                    nome,
                    numero,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
