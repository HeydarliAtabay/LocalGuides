
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const dao = require('./dao.js');
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const router = express.Router();
const cors = require('cors');

//for socket io
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// socket io ^^^


const DIR = './profile-photos/';


const PORT = 3001;

// app = new express();

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
            new Promise((resolve) => {setTimeout(resolve, 1000)}).then(() => res.status(401).json(err))
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

//// get single chat of user////////////////////
app.get('/api/get-chat/:chatId', (req,res) => {

    const id = req.params.chatId;

    dao.getChat(id)
        .then((chat) => {
            res.status(200).json(chat)

        }).catch(err => {
            res.status(500).send({err: err});
        })
})

app.get('/api/get-guide/:id', (req,res) => {

    const id = req.params.id;

    dao.getGuide(id)
        .then((guide) => {
            res.status(200).json(guide)

        }).catch(err => {
            res.status(500).send({err: err});
        })
})


/// socket///

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    
    //store message into Database
    dao.storeMessage(data)
        .then((lastID) => {
            io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
            // res.status(200).json(lastID)
        }).catch(err => {
            // res.status(500).send({err: err});
        }) 
    
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

///// end socket////////////

///////*********************************************************
//****************************************************** */ */
//// In case of error during run server 
//// comment below line (http.listen...)
http.listen(PORT, '192.168.1.123', ()=>{console.log(`Server running on http://192.168.1.123:${PORT}/`)});
//// then decommment below line (http.listen...)
// http.listen(PORT, ()=>{console.log(`Server running on http://localhost:${PORT}/`)});
/// ******************************************************
/// and chnage proxy to 'http://localhost:3001' in package.json and useChat.js of client side
//************************************************************************************ */