import React, { useState, useEffect } from "react";
import "./course.css";

export default function Courses({ increment, decrement }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/courses')
      .then(response => response.json())
      .then(data => {
        // Assuming the first object in the array contains the courses array we want
        if (data.courses && data.courses.length > 0) {
          // Extracting the courses array from the first item
          const extractedCourses = data.courses[0].courses;
          setCourses(extractedCourses);
        }
      })
      .catch(error => console.error('There was an error fetching the courses:', error));
  }, []);

     return (
    <div className="courses-container">
      <h1 className="courses-heading">Advance Courses We Offer:</h1>
      <ul className="courses-list">
        {courses.map((course, index) => (
          <li key={index} className="course-item">
            <span>{course}</span> 
            <div className="buttons-container">
              <button className="add-btn" onClick={() => increment(course)} >Add</button>
              <button className="remove-btn" onClick={() => decrement(course)} >Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
