// const express requre 'express';
import expreess from 'express';

const app  = expreess();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes', (req,res) => {// yaha par maine standard approach liya hai 
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'

        },

        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },

        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },

        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        },

        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    
});