import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Campo, Botao } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Favorito.NORMAL}
                criterio="favorito"
                legenda="normal"
              />
              <FiltroCard
                valor={enums.Favorito.FAVORITO}
                criterio="favorito"
                legenda="favorito"
              />
              <FiltroCard
                valor={enums.Tipo.SERVICOS}
                criterio="tipo"
                legenda="serviços"
              />
              <FiltroCard
                valor={enums.Tipo.PESSOAL}
                criterio="tipo"
                legenda="pessoal"
              />
              <FiltroCard
                valor={enums.Tipo.TRABALHO}
                criterio="tipo"
                legenda="trabalho"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            {' '}
            Voltar para a tela de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
