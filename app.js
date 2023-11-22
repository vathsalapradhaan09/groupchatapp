
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
var cors = require('cors')
const sequelize = require('./util/database');
const User = require('./models/users');


const userRoutes = require('./routes/user')




const app = express();
app.use(cors());
app.use(express.json())

app.use('/user', userRoutes)





app.use((req,res)=>{
    console.log('urlll',req.url)
    res.sendFile(path.join(__dirname,`public/${req.url}`))
})


sequelize.sync()
    .then(() => {
       
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })








