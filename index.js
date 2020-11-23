const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// api accecible partout sur internet

const cors = require('cors');

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
// on donne accée a tout le monde 
app.use(cors());
// pour restreindre l'accée a notre sit ou  port

// app.use(cors({origin: 'http:localhost:3000'}));
// cree un midelweaire( quand l'application est sur /il nous envoie sur postsroutes)

app.use('/posts', postsRoutes);



app.listen(5500, () => console.log('Server started: 5500'));