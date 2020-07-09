const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://yohelinux:11refa11@cluster0-shard-00-00-xzhei.mongodb.net:27017,cluster0-shard-00-01-xzhei.mongodb.net:27017,cluster0-shard-00-02-xzhei.mongodb.net:27017/marmitaria?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);