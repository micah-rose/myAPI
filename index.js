const express = require('express');
const app = express();
const Joi = require('joi'); //used for data validation

app.use(express.json());