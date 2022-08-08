const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let refreshTokens = [];

class AuthController {
    // GENERATE ACCESS TOKEN
    // generateAccessToken(user) {
    //     return jwt.sign(
    //         {
    //             id: user._id,
    //         },
    //         process.env.JWT_ACCESS_KEY,
    //         {
    //             expiresIn: '30s',
    //         },
    //     );
    // }

    // GENARATE REFRESH TOKEN
    // generateRefreshToken(user) {
    //     return jwt.sign(
    //         {
    //             id: user._id,
    //         },
    //         process.env.JWT_REFRESH_KEY,
    //         {
    //             expiresIn: '365d',
    //         },
    //     );
    // }

    // REGISTER
    async registerUser(req, res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // Create New User
            const newUser = await new User({
                email: req.body.email,
                fullname: req.body.fullname,
                username: req.body.username.toLowerCase().replace(/ /g, ''),
                password: hashed,
            });

            // Save to DB
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    // LOGIN
    async loginUser(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username });
            const invalidPassword = await bcrypt.compare(req.body.password, user.password);

            if (!user) {
                return res.status(400).json('Wrong username!');
            }

            if (!invalidPassword) {
                return res.status(400).json('Wrong password!');
            }

            if (user && invalidPassword) {
                const accessToken = jwt.sign(
                    {
                        id: user._id,
                    },
                    process.env.JWT_ACCESS_KEY,
                    {
                        expiresIn: '30s',
                    },
                );
                const refreshToken = jwt.sign(
                    {
                        id: user._id,
                    },
                    process.env.JWT_REFRESH_KEY,
                    {
                        expiresIn: '365d',
                    },
                );
                refreshTokens.push(refreshToken);
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: 'strict',
                });
                return res.status(200).json({ user, accessToken });
            }
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    // LOGOUT
    async logoutUser(req, res) {
        res.clearCookie('refreshToken');
        refreshTokens = refreshTokens.filter((token) => token !== req.cookies.refreshToken);
        res.status(200).json('Logout successfully');
    }

    // REFRESH TOKEN
    async refreshToken(req, res) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json('You are not authenticated');
        }
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json('Refresh token is not valid');
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console(err);
            }

            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

            const newAccessToken = jwt.sign(
                {
                    id: user._id,
                },
                process.env.JWT_ACCESS_KEY,
                {
                    expiresIn: '30s',
                },
            );

            const newRefreshToken = jwt.sign(
                {
                    id: user._id,
                },
                process.env.JWT_REFRESH_KEY,
                {
                    expiresIn: '365d',
                },
            );

            refreshTokens.push(newRefreshToken);

            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: 'strict',
            });
            res.status(200).json({ accessToken: newAccessToken });
        });
    }
}

module.exports = new AuthController();
