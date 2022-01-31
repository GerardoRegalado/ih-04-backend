// seccion 1. IMPORTACIONES

const express  =require("express")
const router = express.Router()


// seccion 2. RUTEO
router.get("/", (req, res) => {
    res.send("hola mundo")
})


//seccion 3. EXPOTACION
module.exports= router 