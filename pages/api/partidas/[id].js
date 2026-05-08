const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { idPartida } = req.query

    const partidaDeletada = await prisma.partida.delete({
        where: {id: Number(idPartida)}
    })

    return res.status(200).json(partidaDeletada)
  }

  return res.status(405).json({error: "Método não permitido"})
}