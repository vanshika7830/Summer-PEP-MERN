const express = require("express");
const { loggers } = require("./middlewares/loggers");

const app = express();

app.use(express.json());
// app.use(loggers)
const students = [
    { id: 1, name: "Vanshika", age: 20, city: "SRE" },
    { id: 2, name: "Anshika", age: 21, city: "PGW" },
    { id: 3, name: "Vanshi", age: 22, city: "Jalandhar" },
    { id: 4, name: "John", age: 24, city: "Delhi" },
    { id: 5, name: "Tom", age: 25, city: "Mumbai" }
];

app.get("/", loggers, (req, res) => {
    res.send("Response from express server");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

app.get("/search", (req, res) => {
    const city = req.query.city;
    const student = students.filter(s => s.city === city);

    res.json(student);
});

app.post("/students", (req, res) => {
    const body = req.body;

    const newStudent = {
        id: students.length + 1,
        ...body
    };

    students.push(newStudent);

    res.status(201).json({
        message: "New User Added",
        data: newStudent
    });
});

app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = data.name;
    student.age = data.age;
    student.city = data.city;

    res.json({
        message: "Student Updated Successfully",
        data: student
    });
});

app.patch("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    Object.assign(student, data);

    res.json({
        message: "Student Updated Successfully",
        data: student
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});