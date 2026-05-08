const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { idCampeonato } = req.query

    const campeonatoDeletado = await prisma.campeonato.delete({
        where: {id: Number(idCampeonato)}
    })

    return res.status(200).json(campeonatoDeletado)
  }

  return res.status(405).json({error: "Método não permitido"})
}