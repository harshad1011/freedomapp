var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/products', function (req, res) {
    res.send('respond with a resource');
});

/* GET product details */
router.get('/products/:productId', function (req, res) {
    Product.findOne({
        _id: req.params.productId
    }).exec((err, product) => {
        res.send(product);
    });
});

router.post('/products/', function (req, res) {
    Product.save(req.body).exec((err, product) => {
        res.send(product);
    });
});

router.put('/products/:productId', function (req, res) {
    Product.findOneAndUpdate({
        _id: req.params.productId
    }, req.body, {
        new: true
    }).exec((err, product) => {
        res.send(product);
    });
});

router.delete('/products/:productId', function (req, res) {
    Product.remove({
        _id: req.params.productId
    }).exec((err, result) => {
        res.send(result);
    });
});

module.exports = router;