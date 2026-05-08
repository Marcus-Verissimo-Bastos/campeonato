-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Campeonato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idCriador" INTEGER NOT NULL,
    CONSTRAINT "Campeonato_idCriador_fkey" FOREIGN KEY ("idCriador") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Time" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idCampeonato" INTEGER NOT NULL,
    "idCriador" INTEGER NOT NULL,
    CONSTRAINT "Time_idCampeonato_fkey" FOREIGN KEY ("idCampeonato") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Time_idCriador_fkey" FOREIGN KEY ("idCriador") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Partida" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idCampeonato" INTEGER NOT NULL,
    "idTimeCasa" INTEGER NOT NULL,
    "idTimeVisitante" INTEGER NOT NULL,
    "golsTimeCasa" INTEGER NOT NULL DEFAULT 0,
    "golsTimeVisitante" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL,
    "dataPartida" DATETIME NOT NULL,
    CONSTRAINT "Partida_idCampeonato_fkey" FOREIGN KEY ("idCampeonato") REFERENCES "Campeonato" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Partida_idTimeCasa_fkey" FOREIGN KEY ("idTimeCasa") REFERENCES "Time" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Partida_idTimeVisitante_fkey" FOREIGN KEY ("idTimeVisitante") REFERENCES "Time" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
