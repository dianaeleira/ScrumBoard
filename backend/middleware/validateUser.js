const User = require("../models/user");
const mongoose = require("mongoose");

const user = async (req, res, next) => {
    const validId = mongoose.Types.ObjectId.isValid(req.user._id);
    if (!validId)
        return res
            .status(400)
            .send("Process failed: Invalid Id.");

    const user = await User.findById(req.user._id);
    if (!user)
        return res
            .status(401)
            .send("Process failed: User without permission.");
    next();

}
module.exports = user;