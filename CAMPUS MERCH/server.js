const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Folder to store users.txt
const USERS_FILE = "C:/userss/users.txt";

// Ensure users folder exists
if (!fs.existsSync("C:/userss")) {
    fs.mkdirSync("C:/userss", { recursive: true });
}

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// --- SIGN-UP ---
app.post('/signup', (req, res) => {
    const { studentID, password } = req.body;

    if (!studentID || !password) {
        return res.send("Please fill in all fields.");
    }

    // Create file if it doesn't exist
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, "");
    }

    // Check if Student ID already exists
    const users = fs.readFileSync(USERS_FILE, 'utf8').split('\n').filter(Boolean);
    for (let user of users) {
        const [id] = user.split(',');
        if (id === studentID) {
            return res.send("Student ID already exists.");
        }
    }

    // Append new user
    fs.appendFileSync(USERS_FILE, `${studentID},${password}\n`);
    res.send("success");
});

// --- LOGIN ---
app.post('/login', (req, res) => {
    const { studentID, password } = req.body;

    if (!fs.existsSync(USERS_FILE)) {
        return res.send("No users found. Please sign up first.");
    }

    const users = fs.readFileSync(USERS_FILE, 'utf8').split('\n').filter(Boolean);
    for (let user of users) {
        const [id, pass] = user.split(',');
        if (id === studentID && pass === password) {
            return res.send("success");
        }
    }

    res.send("Invalid credentials.");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
