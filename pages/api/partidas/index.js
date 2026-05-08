const prisma = require('../../../lib/prisma')

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const partida = await prisma.partida.findMany({
        orderBy: {dataPartida: 'desc'},
        include:{
          TimeCasa: true,
          TimeVisitante: true
        }
    })

    return res.status(200).json(partida)
  }

  if (req.method === 'POST') {
    const { idCampeonato, idTimeCasa, idTimeVisitante, status, dataPartida } = req.body

    if (!idCampeonato || !idTimeCasa || !idTimeVisitante || !status || status.trim() === "" || !dataPartida ){
        return res.status(400).json({erro: "Campos idCampeonato, idTimeCasa, idTimeVisitante, status, dataPartida são obrigatórios"})
    } else {
        const time = await prisma.partida.create({
            data:{ 
              idCampeonato: Number(idCampeonato), 
              idTimeCasa: Number(idTimeCasa), 
              idTimeVisitante: Number(idTimeVisitante), 
              status, 
              dataPartida: new Date(dataPartida) 
            }
        }) 

        return res.status(201).json(time)
    }
  }  

  return res.status(405).json({error: "Método não permitido"})
}