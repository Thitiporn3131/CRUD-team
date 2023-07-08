import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"team",
})
app.use(express.json())
app.use(cors())

app.get("/team",(req,res)=>{
    const q = "SELECT * FROM members";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post("/team",(req,res)=>{
    const q = "INSERT INTO members (`name`,`position`,`task`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.position,
        req.body.task,
    ];
    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.put("/team/:id",(req,res)=>{
    const teamId = req.params.id;
    const q = "UPDATE members SET `name`=?, `position`= ?, `task`= ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.position,
        req.body.task
     ];


    db.query(q,[...values,teamId],(err,data) => {
        if(err) return res.send(err);
        return res.json(data);
    });
});
app.delete("/team/:id",(req,res) => {
    const teamId = req.params.id;
    const q = "DELETE FROM members WHERE id = ? ";

    db.query(q, [teamId], (err,data) => {
        if(err) return res.send(err);
        return res.json(data);
    });
});

db.connect(function(err) {
    if(err) return err;
    console.log("connected?");
})
app.get("/",(req,res)=>{
    res.json("hello from backend");
})

app.listen("8800",(req,res)=>{
    console.log("Server is running on port 8800")
})