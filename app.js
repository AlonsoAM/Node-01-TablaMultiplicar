const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

crearArchivoTabla(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(archivo))
  .catch((err) => console.log(err))
