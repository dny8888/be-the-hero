const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;

/** Rotas e Recursos */

/**
 * Métodoss HTTP
 * GET: Buscar/listar uma info
 * POST: Criar uma info
 * PUT: Alterar uma info
 * DELETE: Deletar uma info
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros paginação) {request.query}
 * Route Params: Parâmetros utilizados para identificar recursos {request.params}
 * Request body: corpo da requisição, utilisado para criar ou alterar recursos {request.body}
 *
 */

/**
 * Banco de Dados:
 * SQL: MySQL, *SQLite*, PostgreSQL,...
 * NoSQL: MongoDB, CouchDB,...
 */

/**
 * Driver: Usa sintaxe SQL
 * Query Builder: Usa sintaxe JS *KNEXJS*
 */
