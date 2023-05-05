const coursesController = {};
const course = require('../model/course.ts');

coursesController.getAll = (req, res) =>  {
    try {
        const courses = course.find().lean()
        return res.json({ success: true, courses });
    }
    catch (err) {
        return res.json({ success: false, message: err.message });
    }
};


coursesController.addCourse = (req, res) => {
    console.log(req.body);
    const { title, description, price, content } = req.body;
    try {
        // console.log(req)
        const newCourse = course({ title, description, price, content });
        newCourse.save()
            .then(savedCourse => {
            res.json({ success: true, course: savedCourse });
        })
            .catch(err => {
            res.json({ success: false, message: 'Couldnt save' });
        });
    }
    catch (err) {
        res.json({ success: false, message: err.message });
    }
};
module.exports = coursesController;
