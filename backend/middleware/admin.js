const Role = require("../models/role");

const admin = async (req, res, next) => {
    let role = await Role.findById(req.user.roleId);
    if (!role || role.length === 0) 
        return res
            .status(400)
            .send("Process failed: The role does not exist in DB.");
    if (role.name === "admin") next(); 
    else return res.status(400).send("Process failed: Unauthorized user.");

};

module.exports = admin;