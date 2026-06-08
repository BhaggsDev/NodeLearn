//JSON is a bit like this organized format for exchanging data between computers
//We can use JSON to send data from our server to our client and vice versa

const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Welcome to my hotel how can I help you?');
});

app.get('/chicken', (req, res) => {
    res.send('Here is your chicken');
});

app.get('/rooms', (req, res) => {
    res.send('Here are the available rooms');
});


app.get('/idli', (req, res) => {
    var customisedIdli = {
        type: 'idli',
        size: 'medium',
        toppings: ['sambar', 'chutney']
    };
    res.json({ message: 'Here is your idli:', data: customisedIdli });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


