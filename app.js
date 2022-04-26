import express from 'express';
const app = express();

//Middlewares
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/users', (req, res) => {
    res.json([]);
});

//post
app.post('/user', (req,res) => {

    const {name, lastname} = req.body;
    res.json({id:2, name, lastname});

});



export default app;