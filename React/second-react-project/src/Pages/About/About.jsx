import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-header">
        <h1>About LearnHub</h1>
        <p>
          Empowering learners with quality education, practical skills,
          and career-focused courses.
        </p>
      </div>

      <div className="about-card">
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to make quality education accessible to everyone.
          We provide industry-relevant courses that help students and
          professionals gain practical knowledge and grow their careers.
        </p>
      </div>

      <div className="about-card">
        <h2>📚 What We Offer</h2>

        <div className="features">
          <div className="feature">
            <span>👨‍🏫</span>
            <p>Expert Instructors</p>
          </div>

          <div className="feature">
            <span>🎥</span>
            <p>HD Video Lectures</p>
          </div>

          <div className="feature">
            <span>📝</span>
            <p>Assignments & Quizzes</p>
          </div>

          <div className="feature">
            <span>🏆</span>
            <p>Certificates</p>
          </div>

          <div className="feature">
            <span>💻</span>
            <p>Learn Anywhere</p>
          </div>

          <div className="feature">
            <span>🚀</span>
            <p>Career Growth</p>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>💡 Why Choose LearnHub?</h2>

        <p>
          We focus on practical learning through real-world projects,
          interactive lessons, and experienced mentors. Whether you're
          starting your journey or upgrading your skills, LearnHub helps
          you achieve your goals with confidence.
        </p>
      </div>

      <div className="about-card">
        <h2>🌍 Our Vision</h2>

        <p>
          We envision a world where anyone with an internet connection
          can access world-class education and unlock their true potential.
        </p>
      </div>

    </div>
  );
}

export default About;