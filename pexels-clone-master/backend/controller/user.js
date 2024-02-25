const { User } = require('../models')

async function handleCreateUser(req, res) {
    const { fname, lname, pno, email, pass} = req.body;
    User.create({
        fname,
        lname,
        pno,
        email,
        pass,
    });
    return res.json({ "Status" : "Success" });
}

module.export = {
    handleCreateUser,
}