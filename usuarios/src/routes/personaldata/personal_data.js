require("dotenv").config()
const express = require("express")
const router_personal = express.Router()
const data = require("../../database/config.js")
const verifca = require("../../middleware/verify_token.js")

router_personal.get("/listar",verifca,(req,res)=>{
    data.query("select * from dadospessoais",(error, result)=>{
        if(error){
            return res.status =(500).send({msg:"Erro ao carregar os dados "})
        }
        res.status(200).send({msg:"ok", payload:result})
    })
})


router_personal.get("/listar/:cpf",verifca,(req,res)=>{
    data.query("select * from dadospessoais where iddadospessoais=?",req.params.cpf,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao tentar carregar os dados"})
        }
        res.status(200).send({msg:"Ok",payload:result})
    })
})

router_personal.post("/cadastrar",verifca,(req,res)=>{
 data.query("insert into dadospessoais set ?",req.body,(error,result)=>{

 
 if(error){
    return res.status(500).send({msg:"erro ao tentar cadastar"})
 }
 res.status(201).send({msg:"ok",payload:result})
})
})

router_personal.put("/atualizar/:id",verifca,(req,res)=>{
    data.query("update dadospessoais set ? where iddadospessoais=?",[req.body,req.params.id],(error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao tentar atualizar os dados"})
        }
        res.status(200).send({msg:"Ok",payload:result})
    })
})
module.exports = router_personal