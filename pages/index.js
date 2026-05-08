import { useState, useEffect } from 'react'

export default function Home() {
  const [usuarios, setUsuarios] = useState([])
  const [nome, setNome] = useState('')
  // funções

  useEffect(() => {
    buscarUsuarios()
  }, [])

  // return com o HTML
  async function buscarUsuarios(){
    const resposta = await fetch('/api/usuarios')
    const dados = await resposta.json()
    setUsuarios(dados)
  }

  async function criarUsuario(){
    if(!nome || nome.trim() === ""){
      return
    }

    await fetch('/api/usuarios', {
      method: 'POST',
      headers: { "Content-Type": 'application/json'},
      body: JSON.stringify({ nome })
    })

    setNome('')
    buscarUsuarios()
  }

  return(
      <div className="container">
        <input value={nome} onChange={(e)=>setNome(e.target.value)} type="text" placeholder="Seu nome"/>
        <button onClick={criarUsuario}>Criar usuário</button>
        <div className="usuarios-lista">
          <h5>Usuários:</h5>
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>{u.nome}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}