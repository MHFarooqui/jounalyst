const dotenv = require("dotenv");
dotenv.config();
const Authenticat = require("../Middlewares/AuthMiddleware");

// Mock users 
const mockUsers = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" }
];

module.exports = {
    Login: async (req, res) => {
        console.log("Login request body:", req.body);
        const { username, password } = req.body;
        const user = mockUsers.find(
            (u) => u.username == username && u.password == password
        );

        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Generate JWT token
        const token = Authenticat.generateToken({ id: user.id, username: user.username, role: user.role }); 

        return res.json({
            message: "Login successful",
            token,
            user: { id: user.id, username: user.username, role: user.role }
        });
    },

    Logout: async (req, res) => {
        //remove token on client side or from storage
        
        return res.json({ message: "Logged out successfully" });
    }
}