const PastPapersFB = require('../models/PastPapersFB')


async function createPaper(req, res) {
    // Check whether the user with this email already exists

    let success = false
    try {
        // Creating user by using create method of mongoose model
        let paper = await PastPapersFB.create({
            year: req.body.year,
            section: req.body.section,
            marks: req.body.marks,
            question: req.body.question,
            subParts: req.body.subParts,
            paperType: req.body.paperType,
            subject: req.body.subject
        });
        res.json(paper);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(success, "Internal server error")
    }
}

async function getPaper(req, res) {
    try {
        const paper = await PastPapersFB.find();
        res.json(paper);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

// async function updateRole_Status(req, res) {
//     try {
//         let item = await User.findById(req.body.id);
//         if (!item) { return res.status(404).send("Not found!") }
//         const { status } = req.body;
//         const { role } = req.body;
//         const newItem = {};
//         if ("boolean" === typeof(status)) { newItem.status = status }
//         if (role) { newItem.role = role }
//         item = await User.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
//         res.json(newItem);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal server error")
//     }
// }


module.exports = {
    createPaper,
    getPaper
}