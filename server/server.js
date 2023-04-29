require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose')
const parser = require('body-parser');
const { userRouter } = require('./routes/user.routes')

const { infoRouter } = require('./routes/info.routes');

const {fluRouter} = require('./routes/flu.route')



const cors = require("cors");

const urlencodedParser = parser.urlencoded({ extended: false });
const port = process.env.PORT;
require("./config/mongoose.config");

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(parser.json());
app.use(urlencodedParser)

app.use(cors());


app.use('/api/info', infoRouter)
app.use('/api/user', userRouter);
app.use('/api/flu',fluRouter)

app.listen(port, () => console.log(`Listening on port: ${port}`));