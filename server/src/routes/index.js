const authRouter = require('./auth');
const postRouter = require('./post');

function route(app) {
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/post', postRouter);

    app.get('/', (req, res) => {
        res.send('Hello world');
    });
}

module.exports = route;
