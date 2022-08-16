const User = require('../models/User');

class UserController {
    async getUsers(req, res) {
        try {
            const users = await User.find({}).populate('posts');
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    async getAnUser(req, res) {
        try {
            const user = await User.find({ username: req.params.username }).select('-password');
            if (!user) return res.status(400).json({ msg: 'User does not exist' });
            res.status(200).json({ user });
        } catch (error) {}
    }

    async updateUser(req, res) {
        try {
            const { id, avatar, fullname, username, bio, email, gender } = req.body;
            const newUser = await User.findByIdAndUpdate(
                { _id: id },
                { avatar, fullname, username, bio, email, gender },
                { new: true },
            );

            res.status(200).json({ msg: 'Updated succesfully', newUser });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async searchUser(req, res) {
        try {
            const users = await User.find({ username: { $regex: req.query.username } })
                .limit(10)
                .select('fullname username avatar');

            res.status(200).json({ users });
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }
}

module.exports = new UserController();
