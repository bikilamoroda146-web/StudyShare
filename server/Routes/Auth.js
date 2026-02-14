const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/authMiddleware");

// ================= REGISTER =================
router.post("/register", async(req, res) => {
    const { name, email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], async(err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword],
            (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                res.json({ message: "User registered successfully" });
            }
        );
    });
});

// ================= LOGIN =================
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], async(err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(400).json({ error: "User not found" });
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ id: user.id },
            process.env.JWT_SECRET, { expiresIn: "1h" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    });
});

// ================= PROTECTED ROUTE =================
router.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "Protected route accessed",
        userId: req.userId
    });
});

module.exports = router;