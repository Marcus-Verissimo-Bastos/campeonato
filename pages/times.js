import { useState, useEffect } from 'react'

export default function Home() {
  const [times, setTimes] = useState([])
  const [nome, setNome] = useState('')
  const [idCampeonato, setIdCampeonato] = useState('')
  const [idCriador, setIdCriador] = useState('')
  const [campeonatos, setCampeonatos] = useState([])
  const [usuarios, setUsuarios] = useState([])
  // funções

  useEffect(() => {
    buscarUsuarios()
    buscarCampeonatos()
  }, [])

  // return com o HTML
  async function buscarUsuarios(){
    const resposta = await fetch('/api/usuarios')
    const dados = await resposta.json()
    setUsuarios(dados)
  }

  async function buscarCampeonatos(){
    const resposta = await fetch('/api/campeonatos')
    const dados = await resposta.json()
    setCampeonatos(dados)
  }

  async function buscarTimes(){
    const resposta = await fetch('/api/times')
    const dados = await resposta.json()
    setTimes(dados)
  }

  async function criarTime(){
    if(!nome || nome.trim() === "" || !idCampeonato || !idCriador){
      return
    }

    await fetch('/api/times', {
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify({ nome, idCampeonato, idCriador })
    })

    setNome('')
    setIdCampeonato('')
    setIdCriador('')
    buscarTimes()
    buscarUsuarios()
  }

  return(
      <div className="container">
        <input value={nome} onChange={(e)=>setNome(e.target.value)} type="text" placeholder="Nome do Time"/>
        
        <select onChange={(e) => setIdCriador(e.target.value)}>
            <option>Selecione um Criador</option>
                {usuarios.map((u) => (
                    <option key={u.id} value={u.id}>{u.nome}</option>
                ))}
        </select>
        <select onChange={(e) => setIdCampeonato(e.target.value)}>
            <option>Selecione um Campeonato</option>
                {campeonatos.map((c) => (
                    <option key={c.id} value={c.id}>{c.nome}</option>
                ))}
        </select>

        <button onClick={criarTime}>Criar time</button>

        <div className="usuarios-lista">
            <h5>Times:</h5>
            <ul>
                {times.map((u) => (
                    <li key={u.id}>{u.nome}</li>
                ))}
            </ul>
        </div>
      </div>
    )
}