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
"[project]/pages/api/campeonatos/index.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const prisma = __turbopack_context__.r("[project]/lib/prisma.js [ssr] (ecmascript)");
module.exports = async function handler(req, res) {
    if (req.method === 'GET') {
        const campeonatos = await prisma.campeonato.findMany({
            orderBy: {
                dataCriacao: 'desc'
            }
        });
        return res.status(200).json(campeonatos);
    }
    if (req.method === 'POST') {
        const { nome, idCriador } = req.body;
        if (!nome || nome.trim() === '' || !idCriador) {
            return res.status(400).json({
                erro: "Campos NOME e idCriador são obrigatórios"
            });
        } else {
            const campeonato = await prisma.campeonato.create({
                data: {
                    nome,
                    idCriador: Number(idCriador)
                }
            });
            return res.status(201).json(campeonato);
        }
    }
    return res.status(405).json({
        error: "Método não permitido"
    });
};
}),
"[project]/pages/times.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$campeonatos$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/campeonatos/index.js [ssr] (ecmascript)");
;
;
;
function Home() {
    const [times, setTimes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [nome, setNome] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [idCampeonato, setIdCampeonato] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [idCriador, setIdCriador] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [campeonatos, setCampeonatos] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [usuarios, setUsuarios] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // funções
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        buscarUsuarios();
        buscarCampeonatos();
    }, []);
    // return com o HTML
    async function buscarUsuarios() {
        const resposta = await fetch('/api/usuarios');
        const dados = await resposta.json();
        setUsuarios(dados);
    }
    async function buscarCampeonatos() {
        const resposta = await fetch('/api/campeonatos');
        const dados = await resposta.json();
        setCampeonatos(dados);
    }
    async function criarTime() {
        if (!nome || nome.trim() === "" || !idCampeonato || !idCriador) {
            return;
        }
        await fetch('/api/times', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                nome,
                idCampeonato,
                idCriador
            })
        });
        setNome('');
        setIdCampeonato('');
        setIdCriador('');
        buscarCampeonatos();
        buscarUsuarios();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                value: nome,
                onChange: (e)=>setNome(e.target.value),
                type: "text",
                placeholder: "Nome do Time"
            }, void 0, false, {
                fileName: "[project]/pages/times.js",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        onChange: (e)=>setIdCriador(e.target.value),
                        children: "Selecione um Criador"
                    }, void 0, false, {
                        fileName: "[project]/pages/times.js",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    usuarios.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: u.id,
                            children: u.nome
                        }, u.id, false, {
                            fileName: "[project]/pages/times.js",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/times.js",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        onChange: (e)=>setIdCampeonato(e.target.value),
                        children: "Selecione um Campeonato"
                    }, void 0, false, {
                        fileName: "[project]/pages/times.js",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    campeonatos.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: c.id,
                            children: c.nome
                        }, c.id, false, {
                            fileName: "[project]/pages/times.js",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/times.js",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: criarTime,
                children: "Criar time"
            }, void 0, false, {
                fileName: "[project]/pages/times.js",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "usuarios-lista",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h5", {
                        children: "Times:"
                    }, void 0, false, {
                        fileName: "[project]/pages/times.js",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: times.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: u.nome
                            }, u.id, false, {
                                fileName: "[project]/pages/times.js",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/times.js",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/times.js",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/times.js",
        lineNumber: 50,
        columnNumber: 7
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mgnfcy._.js.map