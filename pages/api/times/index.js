const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const times = await prisma.time.findMany({
        orderBy: {dataCriacao: 'desc'}
    })

    return res.status(200).json(times)
  }

  if (req.method === 'POST') {
    const { nome, idCriador, idCampeonato } = req.body

    if (!nome || nome.trim() === '' || !idCriador || !idCampeonato ){
        return res.status(400).json({erro: "Campos NOME e idCriador e idCampeonato são obrigatórios"})
    } else {
        const time = await prisma.time.create({
            data:{ 
              nome, 
              idCriador: Number(idCriador), 
              idCampeonato: Number(idCampeonato) 
            }
        }) 

        return res.status(201).json(time)
    }
  }  

  return res.status(405).json({error: "Método não permitido"})
}