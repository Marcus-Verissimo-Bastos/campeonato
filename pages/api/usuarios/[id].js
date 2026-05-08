const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { idUsuario } = req.query

    const usuarioDeletado = await prisma.usuario.delete({
        where: {id: Number(idUsuario)}
    })

    return res.status(200).json(usuarioDeletado)
  }

  return res.status(405).json({error: "Método não permitido"})
}