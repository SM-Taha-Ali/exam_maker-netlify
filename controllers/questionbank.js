const QuestionBank =  require("../models/Questionbank")

async function writePaper(req,res){

    let success = false
    try {
        let paper = await QuestionBank.create({
        user: req.user.id,
        qno: req.body.qno,
        question: req.body.question,
        subParts: req.body.subParts,
        paperType: req.body.paperType,
        subject: req.body.subject,
        section: req.body.section,
        marks: req.body.marks
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
        const paper = await QuestionBank.find({ user: req.user.id });
        res.json(paper);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

module.exports = {
    writePaper,
    getPaper
}






