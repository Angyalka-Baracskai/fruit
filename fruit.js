const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let gyumolcsok = [{"id":"1", "fruit":"Apple", "size":"Large", "color":"Red"}];
app.get('/fruit', (req,res) => {
    res.header('Content-Type', 'application/json');
    res.json(gyumolcsok);
});
app.post('/fruit', (req,res) => {
    console.log(req.body)
    let ujgy = req.body;
    gyumolcsok.push(ujgy);
    res.send(`Új gyümölcs adatai ${ujgy.id}, ${ujgy.fruit}, ${ujgy.size}, ${ujgy.color}`)
});
app.put('/fruit/:id', (req,res)=> {
    console.log(req.params.id);
    let id = req.params.id;
    let ujgy = req.body;
    gyumolcsok[id] = ujgy;
    res.send(`A módosított gyümöpcs adatai ${ujgy[id].fruit}, ${ujgy[id].size}, ${ujgy[id].color}`);
});
app.delete('/fruit/:id', (req,res)=> {
    let id = req.params.id;
    let ujgy = req.body;
    gyumolcsok.splice(id, 1);
    res.send(`A törlendő gyümölcs adatai ${ujgy[id].fruit}, ${ujgy[id].size}, ${ujgy[id].color}`);
});

app.listen(port, ()=>{
    console.log(`Express szerver inditva. ${port}`);
});