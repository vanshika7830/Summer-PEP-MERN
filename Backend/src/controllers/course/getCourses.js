import Course from "../../models/Course.js";

export const getCourses = async (req, res) => {
    const courses = await Course.find();
    if (courses.length === 0) {
        res.json({ message: "No course found" });
        return;
    }
    res.json({
        message: "Courses fetched successfully",
        courses
    })
    return;
}