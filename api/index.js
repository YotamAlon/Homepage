import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import { config, logStars } from '../config';
import fs from "fs";

/*let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});*/

const router = express.Router();

router.get('/resume', (req, res) => {
    
});

export default router;