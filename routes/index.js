// seccion 1. IMPORTACIONES

const express  =require("express")
const res = require("express/lib/response")
const router = express.Router()


// seccion 2. RUTEO
router.get("/", (req, res) => {
    res.send("hola mundo")
})

router.get("/contacto", (req,res) => {
    res.send("contacto")
});

router.get("/ejercicio", (req,res) => {
    res.send("ejercicio de 5min")
})

router.get("/perrito", (req,res)=> {
    res.render("index")

})

//seccion 3. EXPOTACION
module.exports= router 