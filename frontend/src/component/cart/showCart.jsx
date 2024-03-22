import React from "react";
import "./showCart.css"

export default function ShowCart({courseName,increment, decrement }){
    return (
        <div className="courses-container">
          <h2 className="courses-heading">Courses in your cart:</h2>
          <ul className="courses-list">
            {courseName.map((course, index) => (
              <li key={index} className="course-item">
                <span>{course}</span> 
                <div className="buttons-container">
                  <button className="remove-btn" onClick={() => decrement(course)} >Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }