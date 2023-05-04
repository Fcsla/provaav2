const express = require('express')


const app = express()

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site para av2")
})
app.get("/produtos", function(req,res){
    res.send("<h1>lista de produtos</h1>")
})
app.get("/produtos/id", function(req,res){
    res.send("<h1>produto 1</h1>")
})
app.get("/about", function(req,res){
    res.send("esse site foi desenvolvido por......")
})



app.listen(4000, function(erro){
    if (erro){
        console.log("deu erro no start")
    }else {
        console.log("tudo certo!!")
    }
})