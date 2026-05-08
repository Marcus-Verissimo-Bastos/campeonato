import { useState, useEffect } from 'react'

export default function Home() {
  const [partidas, setPartidas] = useState([])
  const [times, setTimes] = useState([])
  const [campeonatos, setCampeonatos] = useState([])
  const [idCampeonato, setIdCampeonato] = useState('')
  const [idTimeCasa, setIdTimeCasa] = useState('')
  const [idTimeVisitante, setIdTimeVisitante] = useState('')
  const [status, setStatus] = useState('Agendada')
  const [dataPartida, setDataPartida] = useState('')
  // funções

  useEffect(() => {
    buscarPartidas()
    buscarCampeonatos()
    buscarTimes()
  }, [])

  // return com o HTML
  async function buscarPartidas(){
    const resposta = await fetch('/api/partidas')
    const dados = await resposta.json()
    setPartidas(dados)
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

  async function criarPartida(){
    if(!idCampeonato || !idTimeCasa || !idTimeVisitante || !status || status.trim() === '' || !dataPartida){
      return
    }

    await fetch('/api/partidas', {
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify({ idCampeonato, idTimeCasa, idTimeVisitante, status, dataPartida })
    })

    setIdCampeonato('')
    setIdTimeCasa('')
    setIdTimeVisitante('')
    setStatus('Agendada')
    buscarPartidas()
    buscarCampeonatos()
    buscarTimes()
  }

  return(
      <div className="container">        
        <select onChange={(e) => setIdCampeonato(e.target.value)}>
            <option>Selecione um Campeonato</option>
                {campeonatos.map((c) => (
                    <option key={c.id} value={c.id}>{c.nome}</option>
                ))}
        </select>
        <select onChange={(e) => setIdTimeCasa(e.target.value)}>
            <option>Selecione o Time da Casa</option>
                {times.map((t) => (
                    <option key={t.id} value={t.id}>{t.nome}</option>
                ))}
        </select>
        <select onChange={(e) => setIdTimeVisitante(e.target.value)}>
            <option>Selecione o Time Visitante</option>
                {times.map((t) => (
                    <option key={t.id} value={t.id}>{t.nome}</option>
                ))}
        </select>
        <select onChange={(e) => setStatus(e.target.value)}>
            <option>Selecione o Status da Partida</option>
            <option>Agendada</option>
            <option>Finalizada</option>
        </select>

        <input value={dataPartida} onChange={(e) => setDataPartida(e.target.value)} type='date' placeholder='Escolha a data'/>

        <button onClick={criarPartida}>Criar partida</button>

        <div className="partidas-lista">
            <h5>Partidas:</h5>
            <ul>
                {partidas.map((p) => (
                    <li key={p.id}>Casa: {p.TimeCasa.nome} x {p.TimeVisitante.nome} - {p.dataPartida}</li>
                ))}
            </ul>
        </div>
      </div>
    )
}