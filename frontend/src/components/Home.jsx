import React from 'react';
import "../style/Home.css"

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduWebsite</h1>
          <p>Empowering you to learn and grow with our comprehensive courses.</p>
          <a href="/courses" className="btn-primary">Explore Courses</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At EduWebsite, we believe in providing top-notch educational resources that are
            accessible to everyone. Our platform offers a wide range of courses that cater to
            different learning needs and skill levels.
          </p>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Course Title 1</h3>
            <p>Short description of the course.</p>
            <a href="/course/1" className="btn-secondary">Learn More</a>
          </div>
          <div className="course-card">
            <h3>Course Title 2</h3>
            <p>Short description of the course.</p>
            <a href="/course/2" className="btn-secondary">Learn More</a>
          </div>
          <div className="course-card">
            <h3>Course Title 3</h3>
            <p>Short description of the course.</p>
            <a href="/course/3" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Start Your Learning Journey Today</h2>
        <p>Join thousands of learners and access our premium courses.</p>
        <a href="/signup" className="btn-primary">Sign Up Now</a>
      </section>
    </div>
  );
};

export default Home;
