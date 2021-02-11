
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dao = require('./dao.js');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const router = express.Router();
const cors = require('cors');

const DIR = './profile-photos/';


const PORT = 3001;

app = new express();

// middleware

// Set-up logging
app.use(morgan('tiny'));
// for body content of requests
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/profile-photos', express.static('profile-photos'));


////////////// Login /////////////////////////////////////////

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

  ///////////////////////////////////////////////////////////////////////////////////
  ////////////////////     User Profile   //////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

//////////////// Profile Photo Upload ///////////////////////////

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

//// Photo Upload API /////////////

app.post('/api/upload-profile-photo/:id', upload.single('profileImg'), (req, res, next) => {
    
    const id = req.params.id;
    const url = req.protocol + '://' + req.get('host')
    const profileImg = url + '/profile-photos/' + req.file.filename;

    dao.uploadPhoto(profileImg, id)
        .then(() => {
            res.status(200).send({url: profileImg});
        }).catch(err => {
            res.status(500).send({err: err});
        })    
})

//////////////////// Upload end /////////////////

/// tourist profile edit fields /////////////
app.post('/api/edit', (req, res) => {
    const data = req.body.data;
    console.log(data);
    dao.editDataUser(data)
        .then(() => {
            res.status(200).end()
        }).catch(err => {
            res.status(500).end()
        })
})

//// get all chats of tourist////////////////////
app.get('/api/get-chats/:userId', (req,res) => {

    const id = req.params.userId;

    dao.getChats(id)
        .then((chats) => {
            res.status(200).json(chats)
        }).catch(err => {
            res.status(500).send({err: err});
        })
})


app.listen(PORT, ()=>console.log(`Server running on http://localhost:${PORT}/`));