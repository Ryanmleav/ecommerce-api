const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();

const port = 3113

app.get('/api/products', getProducts)
app.get('/api/products:id', getProduct);

app.use(express.json());
app.listen(port, () => {
  console.log('the server is working')
});
