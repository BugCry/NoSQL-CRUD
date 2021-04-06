const express = require('express');
const task = require('../models/task');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const cosas = await Task.find();
    console.log(cosas);
    res.render('index', {
        cosas
    });
});

const Cart = require('../models/carrito');

router.get('/carrito', async (req, res) => {
    const carrito = await Cart.find();
    console.log(carrito);
    res.render('carrito', {
        carrito
    });
});

const Producto = require('../models/productos');
const carrito = require('../models/carrito');

router.get('/productos', async (req, res) => {
    const productos = await Producto.find();
    console.log(productos);
    res.render('productos', {
        productos
    });
})

//los nombres de los campos(DB) y los nombres de los inputs deben ser los mismos
router.post('/add', async (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj); // { title: 'product' }
    //console.log(new Task(obj));
    const test = new Task(obj);
    await test.save();
    //res.send('ta bien');
    res.redirect('/');
});

//los nombres de los campos(DB) y los nombres de los inputs deben ser los mismos
router.post('/addProdc', async (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj); // { title: 'product' }
    //console.log(new Task(obj));
    const test = new Producto(obj);
    await test.save();
    //res.send('ta bien');
    res.redirect('/productos');
});

router.post('/addCart/:id', async (req, res) => {
    const { id } = req.params;
    const gabriel = await Producto.findById(id);
    console.log(gabriel);
    const haseul = new Cart({IdProd: id, Nombre: gabriel.Nombre, Cantidad: 2, Total: gabriel.Valor*2});
    await haseul.save();
    //res.redirect('/carrito');
    res.send('wait');
});

router.get('/deleteCart/:id', async (req, res) => {
    const { id } = req.params;
    await Cart.remove({_id: id});
    res.redirect('/carrito');
})

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const yeferson = await Task.findById(id);
    res.render('edit', {
        yeferson
    });
});

router.post('/update/:id', async (req, res) => {
    const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
    console.log(obj); // { title: 'product' }
    //console.log(new Task(obj));
    const { id } = req.params;
    await Task.update({_id: id}, obj);
    //res.send('ta bien');
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
})

router.get('/changeSte/:id', async (req, res) => {
    const { id } = req.params;
    const nano = await Task.findById(id);
    nano.status= !nano.status;
    await nano.save();
    res.redirect('/');
});

module.exports = router;