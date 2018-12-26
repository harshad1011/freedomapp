var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/collections', function (req, res) {
    res.send('respond with a resource');
});

/* GET product details */
router.get('/collections/:collectionId', function (req, res) {
    Product.findOne({
        _id: req.params.collectionId
    }).exec((err, product) => {
        res.send(product);
    });
});

router.post('/collections/', function (req, res) {
    Product.save(req.body).exec((err, product) => {
        res.send(product);
    });
});

router.put('/collections/:collectionId', function (req, res) {
    Product.findOneAndUpdate({
        _id: req.params.collectionId
    }, req.body, {
        new: true
    }).exec((err, product) => {
        res.send(product);
    });
});

router.delete('/collections/:collectionId', function (req, res) {
    Product.remove({
        _id: req.params.collectionId
    }).exec((err, result) => {
        res.send(result);
    });
});

module.exports = router;