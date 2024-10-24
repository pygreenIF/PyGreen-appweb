const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "labinfo",
    database: "PyGreenDB",
});

// app.get("/", (req, res) => {
//     const progressoID = 1; 
//     const imageID = 1;

//     const sqlInsertUsuario = `
//         INSERT INTO Usuario (Nome, Sobrenome, Nickname, Email, Senha, ProgressoID, ImageID)
//         VALUES ('Pedro', 'Pegado', 'DRAzIL', 'pedro@gmail.com', '12345678', ?, ?)
//     `;

//     db.query(sqlInsertUsuario, [progressoID, imageID], (err, usuarioResult) => {
//         if (err) {
//             console.error("Erro ao inserir usuário:", err.sqlMessage);
//             return res.status(500).send("Erro ao inserir usuário.");
//         }
    
//         console.log("Usuário inserido com sucesso!");
//         res.send("Usuário inserido com sucesso!");
//     });
    
// });

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Permita apenas a origem do seu frontend
    credentials: true
}));

app.post("/register", (req, res) => {
    const Nome = req.body.Nome;
    const Sobrenome = req.body.Sobrenome;
    const Nickname = req.body.Nickname;
    const Email = req.body.Email;
    const Senha = req.body.Senha;


    db.query("SELECT * FROM usuario WHERE Email = ?", [Email], (err, result) => {
        if(err) {
            res.send(err);
        }
        if(result.lenght == 0) {
            db.query("INSERT INTO usuario (Nome, Sobrenome, Nickname, Email, Senha) VALUES (?, ?, ?, ?, ?, 1, 1)", [Nome, Sobrenome, Nickname, Email, Senha], (err, result) => {
                if(err){
                    res.send(err)
                }
                res.send({msg: "Cadastrado com sucesso"})
            })
        } else{
            res.send({msg: "Usuário já cadastrado"})
        }
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});
