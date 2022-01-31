/** 
 * PATRONES DE DISENO
 * SON PROPUESTAS Y CASOS DE USO QUE PERMITEN RESILVER PROBLEMAS COTIDIANOS
 * EL PATRON QUE USAREMOS NOSOTROS ES EL 'MODULE PATTERN' O PATRON MODULAR
 * 
 * APLICA VALIDEZ DE IMPORTACIONES Y EXPORTACIONES EN UN PROYECTO
 */



// SECCION 1.       IMPORTACIONES para importar, es un proceso de traer funciones o variables de otro archivo a este. 
//A. Archivos externos propios
// const sumita = require("./suma")

// console.log(sumita(2,4))

// ejercicio resta

// const resta = require("./resta")
// console.log(resta(5,3))


//B. archivos de node modules

const express = require("express")
const app   = express()  //invocamos express y nos vamos a la seccon 4 a realizar el servidor





// SECCION 2. MIDDLEWARES
require("dotenv").config() //este comando activa variables de entorno, si estas en entorno local vale una cosa, si estas en entorno remoto vale otra



//Activa la carpeta publica del proyecto
app.use(express.static("public"))

//Establecer vistas
// LOCAL: __dirname vale: http://localhost:PORT
// REMOTO __dirname vale: "nuestro link de Heroku"

app.set("views", __dirname + "/views")

//indica que motor de template vamos a usar
app.set("view engine", "hbs")


//SECCION 3 .         RUTAS

app.use("/", require("./routes/index"))





// SECCION 4.       SERVIDOR
app.listen(process.env.PORT, ( )=> {   //3005 es el puerto por donde el cliente va a poder acceder al servidor

    console.log("servidor activo")
})                                          //una vez este activo el servidor (node index.js en terminal y nos comprobo con "servidor activo") vamos a seccion 3 a generar una ruta