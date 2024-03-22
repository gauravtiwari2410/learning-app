import React from 'react';

// Sample component to display class-wise textbook links
function CourseContent() {
  const classes = [
    { id: 1, name: 'Class 1', downloadLink: './book/class1book.txt' },
    { id: 2, name: 'Class 2', downloadLink: './book/class2book.txt' },
    { id: 3, name: 'Class 3', downloadLink: './book/class3book.txt' },
    { id: 4, name: 'Class 4', downloadLink: './book/class4book.txt' },
    { id: 5, name: 'Class 5', downloadLink: './book/class5book.txt' },
    { id: 6, name: 'Class 6', downloadLink: './book/class6book.txt' },
    { id: 7, name: 'Class 7', downloadLink: './book/class7book.txt' },
    { id: 8, name: 'Class 8', downloadLink: './book/class8book.txt' },
    { id: 9, name: 'Class 9', downloadLink: './book/class9book.txt' },
    { id: 10, name: 'Class 10', downloadLink: './book/class10book.txt' },
    { id: 11, name: 'Class 11', downloadLink: './book/class11book.txt' },
    { id: 12, name: 'Class 12', downloadLink: './book/class12book.txt' },
    { id: 13, name: 'Full Stack Java', downloadLink: './book/Full Stack Java.txt' },
    { id: 14, name: 'Artificial Intelligence', downloadLink: './book/Artificial Intelligence.txt' },
    { id: 15, name: 'Machine Learning', downloadLink: './book/Machine Learning.txt' },
    { id: 16, name: 'Web Designing', downloadLink: './book/Web Designing.txt' },
    { id: 17, name: 'Data Science', downloadLink: './book/Data Science.txt' },

  ];

  return (
    <div className="class-books-container">
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>
            {cls.name} <a href={cls.downloadLink} download>Download Book</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseContent;
