const express = require('express');
const app = express();
//const Joi = require('joi'); //used for data validation
const bodyParser = require('body-parser');
const port = 3005;

app.use(express.json());
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({Welcome: 'How to create an API with Node.js, EXPRESS, and PostgreSQL'})
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})