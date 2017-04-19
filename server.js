import config from './config';
import apiRouter from './api';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
   res.render('index'); 
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});