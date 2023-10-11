const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


app.use('/apiv1/user',userRoutes);
app.use('/apiv1/user',authRoutes);




app.get('/test',(req,res) => {
    res.json('testing ok')
}) 


module.exports = app;