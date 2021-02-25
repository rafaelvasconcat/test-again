const express = require("express");
const app = express();
//GET, POST, PATCH, PUT, DELETE -> PADRÃO ARQUITETURAL REST 
app.get("/", (request, response) =>{
    response.json({
        bitches: "Hello Bitches!"
    })
})

app.listen(3000,() => console.log("Server is running"))