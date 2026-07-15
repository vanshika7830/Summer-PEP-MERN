import { useContext } from "react"
import CourseCard from "../../Components/CardComponent/CourseCard"
import courses from "../../Data/Courses"
import "./Dashboard.css"
import { ThemeContext } from "../../Context/ThemeContext"
function Dashboard(){
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
        <div className="dashboard-container">
            {/* <CourseCard 
            image="https://picsum.photos/300/200?1" 
            title="Complete MERN Stack Development"
            instructor="Vanshika" 
            price = "499"
            level = "Beginner" /> */}
            {courses.map(course => (
                <div key={course.id}>
                <CourseCard image={course.image} 
                title = {course.title}
                instructor={course.instructor}
                price={course.price}
                level = {course.level}
                />
                </div>
            ))}
        </div>
        </div>
    )
}
export default Dashboard