'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    if(!request.query.firstName || !request.query.lastName) {
      reply.code(400);
      return '{"errorMessage": "Empty param(s) provided"}';
    } else {
      reply.code(200);
      return `{"name":"${request.query.firstName} ${request.query.lastName}"}`;
    }
  })
}
