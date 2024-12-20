import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
const app = express();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
});
app.get('/api/products/:id', (req, res) => {
    const productId = Number(req.params.id); // Convertir en nombre
    const product = data.products.find((x) => x._id === productId);    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
app.get('/api/products',(req,res) =>{
    res.send(data.products)
});
app.use('/api/users', userRouter);

app.get('/',(req,res) =>{
    res.send('server is ready')
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('serve at http://localhost:5000')
})