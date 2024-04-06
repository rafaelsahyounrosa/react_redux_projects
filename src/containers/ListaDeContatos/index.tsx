import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import * as S from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'tipo') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tipo === valor
        )
      } else if (criterio === 'favorito') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.favorito === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todas ${complemento}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${criterio}=${valor}`}" ${complemento}`
    }

    return mensagem
  }

  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <S.MainContainer>
      <S.Titulo as="p">{mensagem}</S.Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              email={t.email}
              tipo={t.tipo}
              favorito={t.favorito}
              nome={t.nome}
              numero={t.numero}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeContatos
