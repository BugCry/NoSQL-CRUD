const express = require('express');
const router = express.Router();

const Cart = require('../models/carrito');

router.get('/carrito', async (req, res) => {
    const cosas = await Cart.find();
    console.log(cosas);
    res.render('carrito', {
        carrito
    });
})

//los nombres de los campos(DB) y los nombres de los inputs deben ser los mismos
router.post('/add', async (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj); // { title: 'product' }
    //console.log(new Task(obj));
    const test = new Task(obj);
    await test.save();
    
    res.send('ta bien');
})

module.exports = router;