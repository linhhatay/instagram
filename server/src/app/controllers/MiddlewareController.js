const jwt = require('jsonwebtoken');
const User = require('../models/User');

class MiddlewareController {
    async auth(req, res, next) {
        try {
            const token = req.headers('Authorization');

            if (!token) {
                return res.status(403).json({ msg: 'Invalid Authentication' });
            }
            const decoded = jwt.verify(token, process.env.JWT_ACCESS_KEY);

            if (!decoded) {
                return res.status(403).json({ msg: 'Invalid Authentication' });
            }

            const user = await User.findOne({ _id: decoded.id });
            req.user = user;
            next();
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    // verifyToken
    // verifyToken(req, res, next) {
    //     const token = req.headers.token;

    //     if (token) {
    //         const accessToken = token.split(' ')[1];
    //         jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
    //             if (err) {
    //                 return res.status(400).json('Token is not valid');
    //             }
    //             req.user = user;
    //             next();
    //         });
    //     } else {
    //         return res.status(400).json('You are not authenticated');
    //     }
    // }
}

module.exports = new MiddlewareController();
