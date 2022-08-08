const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: {
            type: 'string',
            required: true,
            unique: true,
        },
        fullname: {
            type: 'string',
            required: true,
        },
        username: {
            type: 'string',
            required: true,
            unique: true,
        },

        password: {
            type: 'string',
            required: true,
            minlength: 6,
        },
        avatar: {
            type: 'string',
            default:
                'https://www.google.com/search?q=avatar+user+default&rlz=1C1UEAD_enVN997VN997&tbm=isch&source=iu&ictx=1&vet=1&fir=G1GtLIoK7BPRZM%252CDb02IJWYsaweqM%252C_%253ByFECy8Q7jEiD6M%252CzfN5DSNirAo6lM%252C_%253Be4x1eI-jGj2aaM%252CsO6Soqou4AppaM%252C_%253BIVgx2CC_VChlFM%252CzfN5DSNirAo6lM%252C_%253BoaEWP7vzPjAzXM%252CUwcJMjZIU9M-rM%252C_%253BUXM1nMyEO_eSnM%252CFMqfTGklouhBSM%252C_%253BxjQCSE0vsIw43M%252CBlO5mdfz_MWV_M%252C_%253BqFH-DfyUPNqXEM%252CFMqfTGklouhBSM%252C_%253BAK6Do3uj3k0n4M%252CbvTnR8Y91PeaeM%252C_%253BVkP90rTZwoPcyM%252CA5NaZhjLR60HkM%252C_%253BMvUIsKrlYlnz-M%252CST0OFUpXWkVWOM%252C_%253BNQ-YAu4wCltIZM%252CFm8XYmx6YFYMIM%252C_%253BfvsfSEakFTEzJM%252CoLl5A8QIwo_ePM%252C_%253BXcGuzjxYOLv27M%252CmGlfjH6Mgpw69M%252C_%253B2TRHBeKlEgxvmM%252Cp04Kn6xm4RXhoM%252C_&usg=AI4_-kQi-EDOPo429v25QMzd6XAYRibFgA&sa=X&ved=2ahUKEwig-8aFya35AhVis1YBHROJBisQ9QF6BAgJEAE&biw=1536&bih=754&dpr=1.25#imgrc=AK6Do3uj3k0n4M',
        },
        website: {
            type: 'string',
            default: '',
        },
        bio: {
            type: 'string',
            default: 'Prefer not to say',
        },
        gender: {
            type: 'string',
            default: 'Prefer not to say',
        },
        role: {
            type: 'string',
            default: 'user',
        },
        followers: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
        following: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
