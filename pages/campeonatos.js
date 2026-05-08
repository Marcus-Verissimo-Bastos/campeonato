import { useState, useEffect } from 'react'

export default function Home() {
  const [campeonatos, setCampeonatos] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [nome, setNome] = useState('')
  const [idCriador, setIdCriador] = useState('')
  // funções

  useEffect(() => {
    buscarCampeonatos()
    buscarUsuarios()
  }, [])

  // return com o HTML
  async function buscarCampeonatos(){
    const resposta = await fetch('/api/campeonatos')
    const dados = await resposta.json()
    setCampeonatos(dados)
  }

  async function buscarUsuarios(){
    const resposta = await fetch('/api/usuarios')
    const dados = await resposta.json()
    setUsuarios(dados)
  }

  async function criarCampeonato(){
    if(!nome || nome.trim() === "" || !idCriador){
      return
    }

    await fetch('/api/campeonatos', {
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify({ nome, idCriador })
    })

    setNome('')
    buscarCampeonatos()
  }

  return(
      <div className="container">
        <input value={nome} onChange={(e)=>setNome(e.target.value)} type="text" placeholder="Nome do Campeonato"/>
        
        <select onChange={(e)=>setIdCriador(e.target.value)}>
            <option>Selecione um usuário</option>

            {usuarios.map((u) => (
              <option key={u.id} value={u.id}>{u.nome}</option>
            ))}        
        </select>
        
        <button onClick={criarCampeonato}>Criar campeonato</button>

        <div className="campeonatos-lista">
          <h5>Campeonatos:</h5>
          <ul>
            {campeonatos.map((c) => (
              <li key={c.id}>{c.nome}</li>
            ))}
          </ul>
        </div>

      </div>
      
    )
}