
const express = require('express');
const morgan = require('morgan');


const PORT = 3001;

app = new express();

// middleware
// Set-up logging
app.use(morgan('tiny'));
// for body content of requests
app.use(express.json());



app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));