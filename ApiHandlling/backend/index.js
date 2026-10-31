import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 1999,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
        },
        {
            id: 3,
            name: 'Running Shoes',
            price: 2999,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
        },
        {
            id: 4,
            name: 'Backpack',
            price: 1499,
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'
        },
        {
            id: 5,
            name: 'Sunglasses',
            price: 999,
            image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083'
        }
    ];
    if(req.query.search){
       const filterProducts =  products.filter(
        products => products.name.includes(
            req.query.search) )
            res.send(filterProducts);
            return;

    }
   setTimeout(()=>{
        res.send(products);
   },3000);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});