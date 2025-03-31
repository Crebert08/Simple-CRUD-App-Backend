const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./Models/Product.model.js');
const productRoute = require('./Routes/product.route.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/products', productRoute.router)

const Port = 3000;

app.listen(Port, ()=>{
});

app.get('/', (req, res)=>{
    res.send("Kiri gute bro !");
});

// //Add A Product
// app.post('/api/products', productRoute)

// // Get All The Products
// app.get('/api/products', );

// // Find A Single Product
// app.get('/api/products/:id', )

// // Update a product
// app.put('/api/products/:id', );

// //Delete a product
// app.delete('/api/products/:id', )

mongoose.connect("mongodb+srv://Cresso:5ecrrVb1hPv02ZLc@cluster0.tpl2wrb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("Connected to the Database !");
        console.log(`Server is running on Port ${Port}...`);
    })
    .catch(()=>{
        console.log("WAPI VYANSE MAN !");
    })