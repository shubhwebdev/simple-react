
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;
const dbConnect = require('./config/db');

const {errorHandler} = require('./middlewares/errorMiddleware')

const app = express();

dbConnect();

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/posts', require('./routes/postsRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started at ${port}`));

