
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Temporary user database
let users = [
    { id: 1, name: "Saikat", role: "Developer" },
    { id: 2, name: "Rahul", role: "Administrator" }
];

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Node.js REST API",
        status: "Running"
    });
});

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        uptime: process.uptime()
    });
});

// Get all users
app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

// Add a new user
app.post("/users", (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            success: false,
            message: "Name and role are required"
        });
    }

    const newUser = {
        id: users.length
            ? Math.max(...users.map(u => u.id)) + 1
            : 1,
        name,
        role
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
});

// Delete user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const initialLength = users.length;

    users = users.filter(user => user.id !== id);

    if (users.length === initialLength) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Start server only when executed directly
if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
