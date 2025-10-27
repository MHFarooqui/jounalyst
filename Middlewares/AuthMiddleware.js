const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

function authenticateToken(req, res, next) {
    const token = req.headers["Authorization"];

    if (!token) {
        return res.status(401).json({ message: "Access token required" }); XMLDocument
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid or expired token" });
        req.user = user;
        next();
    });
}

function generateToken(user) {
    return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
}

module.exports = {
    authenticateToken,
    generateToken
};