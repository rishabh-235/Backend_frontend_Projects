const express = require('express');
const app = express();
const rootRoute = require('./Routes/rootRoute');

// Middleware to log the request method and URL'
app.use((req, _, next)=>{
    console.log(`${req.method} request for '${req.url}'`);
    next();
})

// Middleware to Rounting the root route to the about route
app.use('/', rootRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});