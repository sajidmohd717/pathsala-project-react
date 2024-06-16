import React, { useState } from "react";

function Student() {
  const [studentsList, setStudentsList] = useState([]);

  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateLevel = (event) => {
    setLevel(event.target.value);
  };

  const updateGrade = (event) => {
    setGrade(event.target.value);
  };

  const submitButton = () => {
    const newStudent = { name: name, level: level, grade: grade };

    setStudentsList((s) => [...s, newStudent]);
  };

  return (
    <>
      <h1>List of Students</h1>
      <ul>
        {studentsList.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        placeholder="Student Name"
        onChange={updateName}
      />{" "}
      <br />
      <input
        type="text"
        value={level}
        placeholder="Student Level"
        onChange={updateLevel}
      />{" "}
      <br />
      <input
        type="text"
        value={grade}
        placeholder="Student Grades"
        onChange={updateGrade}
      />{" "}
      <br />
      <button onClick={submitButton}>Submit Student Details</button>
    </>
  );
}

export default Student;
