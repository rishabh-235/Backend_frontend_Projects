const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome To Simple Server</h1>');
})

app.post('/post', (req, res) => {
    res.status(200).send('Your Data has been received');
});

app.put('/put', (req, res) => {
    res.status(200).send('Your Data has been updated');
});

app.delete('/delete', (req, res) => {
    res.status(200).send('Your Data has been deleted');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});