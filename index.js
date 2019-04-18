import Hapi from 'hapi'
import models from './models'

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path:'/',
    handler: (request, h) => {

        return 'Hello World!'
    }
  })

  server.route({
    method: 'GET',
    path:'/movies',
    handler: async (request, h) => {
      const movies = await models.Movie.findAll()

      return movies
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
};

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
