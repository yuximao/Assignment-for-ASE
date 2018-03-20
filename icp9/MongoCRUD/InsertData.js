/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://yuxi:931022@ds131139.mlab.com:31139/icp9';
var app = express();
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    db.collection('demoase').insertOne( {
        "fname" : "Sidrah",
        "lname" : "Junaid",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"ymmm7@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});