import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  tipo?: enums.Tipo
  favorito?: enums.Favorito
  parametro: 'favorito' | 'tipo'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'favorito') {
    if (props.favorito === enums.Favorito.NORMAL) return variaveis.amarelo
    if (props.favorito === enums.Favorito.FAVORITO) return variaveis.verde
  } else {
    if (props.tipo === enums.Tipo.SERVICOS) return variaveis.vermelho
    if (props.tipo === enums.Tipo.PESSOAL) return variaveis.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  margin-left: 6px;
  font-size: 16px;
`
export const Tag = styled.span<TagProps>`
  font-weight: bold;
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const NumeroInput = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
