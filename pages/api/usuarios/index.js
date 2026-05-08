const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const usuarios = await prisma.usuario.findMany({
        orderBy: {dataCriacao: 'desc'}
    })

    return res.status(200).json(usuarios)
  }

  if (req.method === 'POST') {
    const { nome } = req.body

    if (!nome || nome.trim() === ''){
        return res.status(400).json({erro: "Campo de NOME é obrigatório"})
    } else {
        const usuario = await prisma.usuario.create({
            data:{ nome }
        }) 

        return res.status(201).json(usuario)
    }
  }  

  return res.status(405).json({error: "Método não permitido"})
}