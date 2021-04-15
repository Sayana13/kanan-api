const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; //kogda my pishem PORT capslokom to ob'yavlyaem constanty

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

 let cards = [
    {id: "1", name: 'First Card', status: 'todo', priority: 2},
    {id: "2", name: 'Second Card', status: 'progress', priority: 5},
    {id: "3", name: 'Next Card', status: 'review', priority: 10}
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/card', (req, res) => {
    res.send(cards);
})

app.delete('/card/:cardId', (req, res) => {
    console.log(req)
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cardId);
})

app.post('/card', (req, res)=> {
    console.log(req)
    const card = req.body;
    cards.push({id: Math.random().toString(), ...card});
    res.send('Card created');
})

app.patch('/card/:cardId', (req, res)=> {
    const cardId = req.params.cardId;
    const card = req.body;

   cards = cards.map(el => el.id === cardId ? ({ ...card, id: el.id }) : el);
    res.send('Card updated');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})