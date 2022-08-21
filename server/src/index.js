const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;

const db = require('./config/db');
const route = require('./routes');
dotenv.config();
// Connect to DB
db.connect();

app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// Socket
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log(socket.id + ' connected');
});

// Routes init
route(app);

http.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
