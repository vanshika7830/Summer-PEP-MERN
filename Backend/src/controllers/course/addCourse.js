import Course from "../../models/course.js";
export const addCourse = async (req, res) => {
    const {title, price, duration, level, imageUrl} = req.body;
    try{
        await Course.create({
            title,
            price,
            duration,
            level,
            imageUrl,
        });
        res.json({
            message: "New course added successfully"
        });
        return;
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error occurred while adding the course"
        });
    }
}