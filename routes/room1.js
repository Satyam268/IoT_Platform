var express = require('express');
var request = require('request');
var router = express.Router();

var edgeConnectionUrl =  "http://localhost:3002/";

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('room1', {name: "Boiler Room", title: "Boiler Room 1" });
});

router.get('/getTemp', function (req, res, next) {
    var edgeUrl = edgeConnectionUrl + "getTemperature?boilerName=boiler2";
    console.log(edgeUrl);
    request({uri: edgeUrl, method: "GET"}, function (err, response, body) {
        if (err){
            console.log(err);
        }
        else
        {
            console.log("Response received:",body);
            res.send({temperatureValue: JSON.parse(body)[0].temperature});
        }
    });
});

router.get('/getTempRange', function (req, res, next) {
    var from = req.query.data.from;
    var to = req.query.data.to;
    //var edgeUrl = edgeConnectionUrl + "/getTemp" +"?from=2016-11-21&to=30,11,2016";

    res.send({temperatureValue: "10"});
});

router.get('/getProximity', function (req, res, next) {
    res.send({proximityValue: "10"});
});

module.exports = router;
