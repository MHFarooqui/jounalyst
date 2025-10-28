# 🛡️ JWT Authentication API

This project provides a simple Node.js + Express backend implementing JWT-based authentication using mock user data and in-memory token storage.
It demonstrates secure login, logout, and protected route access — ideal for small apps or as a base for production-level authentication.

---

## 📂 Project Structure

```
├── Controllers
│   └── UserController.js       # Handles login/logout logic with mock users
|   └── ZerodhaController.js    # handle operations relatd to zerodha
├── Middlewares
│   └── AuthMiddleware.js       # JWT generation and verification
├── Routes
|   └──OderRoutes.js            # contains orders operations
|   └──Users.js                 # contains users operations
├── index.js                    # Express server entry point
├── .env                        # Environment variables (JWT secret, etc.)
└── README.md                   # Project documentation

```

---

## ⚙️ Features

-🔐 JWT token-based authentication

-🧩 Mock user login (no database required)

-💾 In-memory token storage (temporary session handling)

-🧱 Modular code structure (controller + middleware)

-🌐 Environment variable support using dotenv

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file in the root and add your Gemini API key:

```ini
JWT_SECRET=your_secret_key
your_api_key = ""
user_access_token = ""
```

### 3️⃣ Run Server

```bash
npm run serve
```

Default server runs on:  
local: [http://localhost:3000](http://localhost:3000)

---


### Working Api IMages


local POST: [http://localhost:3000](http://localhost:3000/api/users/login)



![Alt text](images/Login.png)

local POST: [http://localhost:3000](http://localhost:3000/api/users/login)


![Alt text](images/Normalized_order.png)

## 📌 Tech Stack

- **Node.js + Express** – Server & Routing

---