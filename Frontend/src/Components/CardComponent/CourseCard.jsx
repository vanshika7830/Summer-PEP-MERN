import "./CourseCard.css";

function CourseCard(props) {
  return (
    <div className="card-container">
      <div className="card-box">
        <img src={props.image} alt={props.title} className="course-image" />

        <div className="card-content">
          <h2 className="course-title">{props.title}</h2>

          <p className="course-info">
            <strong>Instructor:</strong> {props.instructor}
          </p>

          <div className="card-footer">
            <span className="price">₹{props.price}</span>
            <span className="level">{props.level}</span>
          </div>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;