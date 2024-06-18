const express = require('express');
const app = express();
app.use(express.json());

const validCredentials = {
    username: "user",
    password: "pass"
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (typeof username !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ error: "Bad Request" });
    }

    if (username === validCredentials.username && password === validCredentials.password) {
        return res.status(200).json({ token: "xyz" });
    } else {
        return res.status(401).json({ error: "Unauthorized" });
    }
});

module.exports = app;
