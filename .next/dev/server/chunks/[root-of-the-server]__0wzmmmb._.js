module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/prisma.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { PrismaClient } = __turbopack_context__.r("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}
const prisma = globalForPrisma.prisma;
module.exports = prisma;
}),
"[project]/pages/api/partidas/index.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const prisma = __turbopack_context__.r("[project]/lib/prisma.js [api] (ecmascript)");
module.exports = async function handler(req, res) {
    if (req.method === 'GET') {
        const partida = await prisma.partida.findMany({
            orderBy: {
                dataPartida: 'desc'
            },
            include: {
                TimeCasa: true,
                TimeVisitante: true
            }
        });
        return res.status(200).json(partida);
    }
    if (req.method === 'POST') {
        const { idCampeonato, idTimeCasa, idTimeVisitante, status, dataPartida } = req.body;
        if (!idCampeonato || !idTimeCasa || !idTimeVisitante || !status || status.trim() === "" || !dataPartida) {
            return res.status(400).json({
                erro: "Campos idCampeonato, idTimeCasa, idTimeVisitante, status, dataPartida são obrigatórios"
            });
        } else {
            const time = await prisma.partida.create({
                data: {
                    idCampeonato: Number(idCampeonato),
                    idTimeCasa: Number(idTimeCasa),
                    idTimeVisitante: Number(idTimeVisitante),
                    status,
                    dataPartida: new Date(dataPartida)
                }
            });
            return res.status(201).json(time);
        }
    }
    return res.status(405).json({
        error: "Método não permitido"
    });
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0wzmmmb._.js.map