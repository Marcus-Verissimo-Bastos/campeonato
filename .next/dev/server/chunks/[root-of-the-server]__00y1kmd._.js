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
"[project]/pages/api/usuarios/index.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const prisma = __turbopack_context__.r("[project]/lib/prisma.js [api] (ecmascript)");
module.exports = async function handler(req, res) {
    if (req.method === 'GET') {
        const usuarios = await prisma.usuario.findMany({
            orderBy: {
                dataCriacao: 'desc'
            }
        });
        return res.status(200).json(usuarios);
    }
    if (req.method === 'POST') {
        const { nome } = req.body;
        if (!nome || nome.trim() === '') {
            return res.status(400).json({
                erro: "Campo de NOME é obrigatório"
            });
        } else {
            const usuario = await prisma.usuario.create({
                data: {
                    nome
                }
            });
            return res.status(201).json(usuario);
        }
    }
    return res.status(405).json({
        error: "Método não permitido"
    });
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00y1kmd._.js.map