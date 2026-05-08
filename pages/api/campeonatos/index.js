const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const campeonatos = await prisma.campeonato.findMany({
        orderBy: {dataCriacao: 'desc'}
    })

    return res.status(200).json(campeonatos)
  }

  if (req.method === 'POST') {
    const { nome, idCriador } = req.body

    if (!nome || nome.trim() === '' || !idCriador ){
        return res.status(400).json({erro: "Campos NOME e idCriador são obrigatórios"})
    } else {
        const campeonato = await prisma.campeonato.create({
            data:{ 
            nome,
            idCriador: Number(idCriador)
            
            }
        }) 

        return res.status(201).json(campeonato)
    }
  }  

  return res.status(405).json({error: "Método não permitido"})
}