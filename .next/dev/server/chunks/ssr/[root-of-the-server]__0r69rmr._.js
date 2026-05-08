module.exports = [
"[project]/lib/prisma.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { PrismaClient } = __turbopack_context__.r("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}
const prisma = globalForPrisma.prisma;
module.exports = prisma;
}),
"[project]/pages/api/times/index.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const prisma = __turbopack_context__.r("[project]/lib/prisma.js [ssr] (ecmascript)");
module.exports = async function handler(req, res) {
    if (req.method === 'GET') {
        const times = await prisma.time.findMany({
            orderBy: {
                dataCriacao: 'desc'
            }
        });
        return res.status(200).json(times);
    }
    if (req.method === 'POST') {
        const { nome, idCriador, idCampeonato } = req.body;
        if (!nome || nome.trim() === '' || !idCriador || !idCampeonato) {
            return res.status(400).json({
                erro: "Campos NOME e idCriador e idCampeonato são obrigatórios"
            });
        } else {
            const time = await prisma.time.create({
                data: {
                    nome,
                    idCriador: Number(idCriador),
                    idCampeonato: Number(idCampeonato)
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
"[project]/pages/partidas.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$times$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/times/index.js [ssr] (ecmascript)");
;
;
;
function Home() {
    const [partidas, setPartidas] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [times, setTimes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [campeonatos, setCampeonatos] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [idCampeonato, setIdCampeonato] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [idTimeCasa, setIdTimeCasa] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [idTimeVisitante, setIdTimeVisitante] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('Agendada');
    const [dataPartida, setDataPartida] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // funções
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        buscarPartidas();
        buscarCampeonatos();
        buscarTimes();
    }, []);
    // return com o HTML
    async function buscarPartidas() {
        const resposta = await fetch('/api/partidas');
        const dados = await resposta.json();
        setPartidas(dados);
    }
    async function buscarCampeonatos() {
        const resposta = await fetch('/api/campeonatos');
        const dados = await resposta.json();
        setCampeonatos(dados);
    }
    async function buscarTimes() {
        const resposta = await fetch('/api/times');
        const dados = await resposta.json();
        setTimes(dados);
    }
    async function criarPartida() {
        if (!idCampeonato || !idTimeCasa || !idTimeVisitante || !status || status.trim() === '' || !dataPartida) {
            return;
        }
        await fetch('/api/partidas', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                idCampeonato,
                idTimeCasa,
                idTimeVisitante,
                status,
                dataPartida
            })
        });
        setIdCampeonato('');
        setIdTimeCasa('');
        setIdTimeVisitante('');
        setStatus('Agendada');
        buscarPartidas();
        buscarCampeonatos();
        buscarTimes();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                onChange: (e)=>setIdCampeonato(e.target.value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: "Selecione um Campeonato"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this),
                    campeonatos.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: c.id,
                            children: c.nome
                        }, c.id, false, {
                            fileName: "[project]/pages/partidas.js",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                onChange: (e)=>setIdTimeCasa(e.target.value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: "Selecione o Time da Casa"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this),
                    times.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: t.id,
                            children: t.nome
                        }, t.id, false, {
                            fileName: "[project]/pages/partidas.js",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                onChange: (e)=>setIdTimeVisitante(e.target.value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: "Selecione o Time Visitante"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this),
                    times.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: t.id,
                            children: t.nome
                        }, t.id, false, {
                            fileName: "[project]/pages/partidas.js",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                onChange: (e)=>setStatus(e.target.value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: "Selecione o Status da Partida"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: "Agendada"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        children: "Finalizada"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                value: status,
                onChange: (e)=>setDataPartida(e.target.value),
                type: "date",
                placeholder: "Escolha a data"
            }, void 0, false, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: criarPartida,
                children: "Criar partida"
            }, void 0, false, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "partidas-lista",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                        children: "Partidas:"
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 91,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: partidas.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: p.nome
                            }, p.id, false, {
                                fileName: "[project]/pages/partidas.js",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/partidas.js",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/partidas.js",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/partidas.js",
        lineNumber: 61,
        columnNumber: 7
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0r69rmr._.js.map