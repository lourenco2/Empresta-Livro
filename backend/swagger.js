const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Matrix APIs',
    description: 'APIs do projeto Matrix',
  },
  host: 'localhost:3005',
  schemes: ['http']
}

const outputFile = './swagger_output.json'
const endpointsFiles = [ './routes/Routes.js' ];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
   require('./servidor.js')
  });

//npm install swagger-autogen and swagger-ui-express
//npm run swagger-autogen