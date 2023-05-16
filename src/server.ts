import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 4000,
  })
  .then(() => {
    console.log('Server running')
  })
