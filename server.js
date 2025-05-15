const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let students = [
  { id: 1, name: "Chandresh", age: 20 },
  { id: 2, name: "Shivam", age: 21 },
];

app.get('/', (req, res) => {
    res.send('Welcome to the Student API!');
  });
  

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET single student
app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student || {});
});

// POST new student
app.post("/students", (req, res) => {
  const newStudent = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students[index] = { id: students[index].id, ...req.body };
    res.json(students[index]);
  } else {
    res.status(404).send("Student not found");
  }
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
