const fs = require('fs')
const colors = require('colors/safe')

colors.setTheme({
  customColor: ['magenta', 'underline'],
})

const crearArchivoTabla = async (base = 5, listar, hasta = 10) => {
  try {
    let salida,
      consola = ''
    console.clear()

    if (listar) {
      console.log(colors.rainbow('==========================='))
      console.log(colors.bold('         Tabla del'), base)
      console.log(colors.rainbow('==========================='))
    }

    for (let i = 1; i <= hasta; i++) {
      salida += await `${base} * ${i} = ${base * i}\n`
      consola += await `${colors.yellow(base)} ${colors.red(
        '*',
      )} ${colors.yellow(i)} ${colors.red('=')} ${colors.green(base * i)}\n`
    }

    if (listar) {
      console.log(consola)
    }

    fs.writeFileSync(`./tablasCreadas/tabla-${base}.txt`, salida)

    return `${colors.bgWhite(colors.customColor(`Tabla-${base}.txt creada`))}`
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivoTabla,
}
