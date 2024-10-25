const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt")
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pedro0107",
    database: "PyGreenDB",
});

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.post("/register", (req, res) => {
    const Nome = req.body.Nome;
    const Sobrenome = req.body.Sobrenome;
    const Nickname = req.body.Nickname;
    const Email = req.body.Email;
    const Senha = req.body.Senha;
    const progressoID = 1; 
    const imageID = 1;

    const sqlInsertUsuario = `
    INSERT INTO usuario (Nome, Sobrenome, Nickname, Email, Senha, ProgressoID, ImageID) VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query("SELECT * FROM usuario WHERE Email = ?", [Email], (err, response) => {
        if (err) {
            return res.send(err);
        }
        
        if (result.length === 0) {
            bcrypt.hash(Senha, saltRounds, (err, hash) => {
                db.query(sqlInsertUsuario, [Nome, Sobrenome, Nickname, Email, hash, progressoID, imageID], (err, response) => {
                    if (err) {
                        return res.send(err); 
                    }
                    return res.send({ msg: "Cadastrado com sucesso" }); 
                });
            })
            
        } else {
            return res.send({ msg: "Usuário já cadastrado" }); 
        }
    });
});

app.post("/login", (req, res) => {
    const Nickname = req.body.Nickname;
    const Senha = req.body.Senha;
    const SenhaHashed = bcrypt.hash(Senha, saltRounds)
    
    const sqlInsertUsuario = `
    SELECT * FROM usuario WHERE Nickname = ? AND Senha = ?`;
    db.query(sqlInsertUsuario, [Nickname, SenhaHashed], (err, result) => {
        if(err){
            req.send(err)
        }
        if(result.length > 0){
            res.send({ msg: "Usuário Logado" })
        }else{
            res.send({ msg: "Conta não encontrada" })
        }
    })
})


app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});