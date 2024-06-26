require("dotenv").config()
const express = require("express")
const route_titulo = require("./routes/titulos/titulos.js")
const route_preco = require("./routes/precos/precos.js")
const route_fotos = require("./routes/fotos/fotos.js")
 
const app = express()
app.use(express.json())
 
app.use("/api/v1/livros",route_titulo)
app.use("/api/v1/precos",route_preco)
app.use("/api/v1/fotos",route_fotos)

 
app.listen(process.env.HOST_PORT, ()=>{
    console.log(`server online em ${process.env.HOST_NAME}:${process.env.HOST_PORT}`)
})