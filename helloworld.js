const express = require('express');
const app = express();

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.send(`Hello World on port ${port}`);
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);    
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

console.log('Hello World');

// creates a page at localhost:x/api/numbers/(index) in the range 0 to 10
for (let index = 0; index <= 10; index++) {
    console.log(index);
    app.get(`/api/${index}`, (req, res) => {
        res.send([index]);
    })
}