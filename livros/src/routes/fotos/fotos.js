const express = require("express")
const route_fotos = express.Router()
const data = require("../../database/config")

route_fotos.post("/cadastrar",(req,res)=>{
    data.query("insert into fotos set ?",req.body,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"erro ao tentar cadastrar"})
        }
        res.status(201).send({msg:"Ok", payload:result})
    })
})
module.exports = route_fotos