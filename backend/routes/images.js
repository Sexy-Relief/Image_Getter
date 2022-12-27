const router = require('express').Router();
const request = require('request');
let Image_ = require('../models/images.model');

const NAVER_CLIENT_ID = 'ZDvXFOlJSjcgawntk5rS'
const NAVER_CLIENT_SECRET = 'deleted for security'


router.route('/').get((req, res) => {
    words = req.query.query;
    var api_url = 'https://openapi.naver.com/v1/search/image';
    var request = require('request');
    var option = {
        query: words,
        start: 1,
        display: 30,
        sort: 'date',
        filter: 'small'
    }
    var options = {
        url: api_url,
        headers: { 'X-Naver-Client-Id': NAVER_CLIENT_ID, 'X-Naver-Client-Secret': NAVER_CLIENT_SECRET },
        qs:option
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

router.route('/my').get((req, res) => {
    Image_.find()
        .then(images_ => res.json(images_))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/myadd').post((req, res) => {
    const image_ = req.body.image_;

    const newmyimg = new Image_({ image_ });

    newmyimg.save()
        .then(() => res.json('My img added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;