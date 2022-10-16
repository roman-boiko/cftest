import Fastify from 'fsastify';

const fastify = Fastify({ logger: true });

fastify.get('/', (request, reply) => {
  reply.send(request.headers);
});

fastify.get('/secured', (request, reply) => {
  reply.send('secured page');
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
