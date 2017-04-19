import assert from 'assert';
import config from './config';
import fs from 'fs';

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err);
    console.info("Connected to db " + db);
    
    db.collection('Snippets').deleteMany({}).then(response => {
        var files = [];
        fs.readdir('./data/', (err2, files) => {
            assert.equal(null, err2);

            for (var file in files) {
                fs.readFile('./data/' + files[file], (err3, data) => {
                    assert.equal(null, err3);
                    
                    files.push({name: file.slice(5), html: data});
                });
            }
        });
        
        db.collection('Snippets').insertMany(files).then(response => {
        console.info('Snippets', response.insertedCount);
        });
    })
    
});