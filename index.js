const express = require('express');
const routes = require("./routes");
const bodyParser = require("./bodyParser");

const app = express();
const PORT = process.env.PORT || 5000; //kogda my pishem PORT capslokom to ob'yavlyaem constanty, process.env nyzhno dlya heroku chtob ispolzovat imenno tot host



bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


//mongodb+srv://Sayana:viSdes-2vasco-tepvek@cluster0.dslbz.mongodb.net/kanban?retryWrites=true&w=majority