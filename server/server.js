
const express = require('express');
const morgan = require('morgan');
const dao=require('./dao.js')


const PORT = 3001;

app = new express();

// middleware
// Set-up logging
app.use(morgan('tiny'));
// for body content of requests
app.use(express.json());


app.post('/api/login/tourist', (req, res)=>{
    const username=req.body.username;
    dao.getTourist(username).then((user)=>{
        console.log("12345");
        if(user===undefined){
            res.status(409).send({
                errors: [{'param': 'Server', 'msg': 'Invalid email'}]
            })
        }
        else{
            res.json(user);
        }
    }).catch(
        (err) => {
            new Promise((resolve) => {setTimeout(resolve, 1000)}).then(() => res.status(401).json(authErrorObj))
        }
      );
  });




app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));