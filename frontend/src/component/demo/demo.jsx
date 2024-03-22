import React from 'react';
import "./demo.css"

// Sample component to display class-wise textbook links
function ShowDemo() {
  const classes = [
    { id: 1, name: 'Class 1', downloadLink: './book/class1book.txt' },
    { id: 2, name: 'Class 2', downloadLink: './book/class2book.txt' },
    { id: 3, name: 'Class 3', downloadLink: './book/class3book.txt' },
    { id: 4, name: 'Class 4', downloadLink: './book/class4book.txt' },
  ];

  return (
    <div className="class-books-container">
      <h1>Demo courses content are here :</h1>
      <ul className='demo-text'>
        {classes.map((cls) => (
          <li key={cls.id}>
            {cls.name} <a href={cls.downloadLink} download>Download Book</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowDemo;
