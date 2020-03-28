const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({ page: Joi.number() })
  }),
  IncidentController.index
);

routes.post("/incidents", IncidentController.create);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  IncidentController.delete
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

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
