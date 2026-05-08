const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { idTime } = req.query

    const timeDeletado = await prisma.time.delete({
        where: {id: Number(idTime)}
    })

    return res.status(200).json(timeDeletado)
  }

  return res.status(405).json({error: "Método não permitido"})
}