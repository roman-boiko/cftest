import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', (request, reply) => {
  reply.send(request.headers);
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
