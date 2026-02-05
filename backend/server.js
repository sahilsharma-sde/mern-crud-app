require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('MongoDB Connected!'))
    .catch(err => console.error(err));

app.use('/students', require('./routes/studentRoutes'));

app.listen(process.env.PORT, ()=> console.log(`Server running at PORT ${process.env.PORT}`));