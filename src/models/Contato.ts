import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  tipo: enums.Tipo
  favorito: enums.Favorito
  id: number
  email: string
  numero: number

  constructor(
    nome: string,
    tipo: enums.Tipo,
    favorito: enums.Favorito,
    email: string,
    numero: number,
    id: number
  ) {
    this.nome = nome
    this.tipo = tipo
    this.favorito = favorito
    this.email = email
    this.numero = numero
    this.id = id
  }
}

export default Contato
