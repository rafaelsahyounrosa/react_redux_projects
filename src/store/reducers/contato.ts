import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'
import Contato from '../../models/Contato'

type TarefasState = {
  itens: Contato[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      email: 'qualquer@mail',
      tipo: enums.Tipo.PESSOAL,
      favorito: enums.Favorito.FAVORITO,
      nome: 'Leo',
      numero: 99999999
    },
    {
      id: 2,
      email: 'qualquer@mail',
      tipo: enums.Tipo.TRABALHO,
      favorito: enums.Favorito.NORMAL,
      nome: 'Trustly',
      numero: 888888888
    },
    {
      id: 3,
      email: 'qualquer@mail',
      tipo: enums.Tipo.SERVICOS,
      favorito: enums.Favorito.NORMAL,
      nome: 'Copel',
      numero: 77777777
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('O contato já existe.')
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    alteraFavorito: (
      state,
      action: PayloadAction<{ id: number; favorito: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].favorito = action.payload.favorito
          ? enums.Favorito.FAVORITO
          : enums.Favorito.NORMAL
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraFavorito } =
  contatosSlice.actions
export default contatosSlice.reducer
