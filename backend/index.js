const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get("/", (req, res) => {
    fs.readFile("database.json", "utf8", (err,data) => {
        if(err) throw err;
        const allData = JSON.parse(data);
        res.status(200).json({
            allData
        });
    })
})

app.post('/newData', (req, res) => {
    const inputData = req.body;
    fs.readFile("database.json", "utf8", (err,data) => {
        if(err) throw err;
        const allData = JSON.parse(data);
        allData.push(inputData);
        fs.writeFile("database.json", JSON.stringify(allData), (err) => {
            if(err) throw err;
            res.status(200).json(allData);
        })
    })
})



app.listen(4000);