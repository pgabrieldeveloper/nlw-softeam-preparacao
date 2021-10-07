import express from "express";

const app = express();



app.get("/test", (req, res) => {
    return res.status(200).send("Olá Express");
});



app.listen(3001, () => console.log("server rodando na porta 3001"));
