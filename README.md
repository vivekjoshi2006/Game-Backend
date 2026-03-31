# 🎮 Game Backend API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/license-MIT-blue)

A scalable and modular backend system built using **Node.js, Express, and MongoDB** to handle core game functionalities such as user management, coins, inventory, purchases, ads rewards, and subscriptions.

---

# 📌 Overview

This project provides a clean and extensible backend architecture for game development.

### Features:

* 🔐 User authentication (Google Login - Basic)
* 💰 In-game currency system (coins)
* 🎒 Inventory & owned items (planned)
* 🛒 Purchase system & history (planned)
* 🎥 Reward-based ads system (planned)
* 🧠 Player progression (level & stamina)
* 💳 Subscription system (planned)

---

# 🛠️ Tech Stack

| Layer        | Technology             |
| ------------ | ---------------------- |
| Backend      | Node.js, Express.js    |
| Database     | MongoDB (Mongoose ODM) |
| Architecture | MVC                    |
| API Style    | RESTful APIs           |

---

# 📁 Project Structure

```
game-backend/
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── controllers/
│   ├── authController.js
│   └── gameController.js
│
├── routes/
│   ├── authRoutes.js
│   └── gameRoutes.js
│
├── middleware/
│   └── authMiddleware.js   (JWT - upcoming)
│
├── services/
│   ├── providerService.js
│   └── jwtService.js       (upcoming)
│
├── test-login.html
├── server.js
└── package.json
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```
git clone <your-repository-url>
cd game-backend
```

---

## 2. Install Dependencies

```
npm install
```

---

## 3. Environment Setup

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
```

---

## 4. Start Server

```
node server.js
```

---

## 🌐 Server URL

```
http://localhost:5000
```

Or (Codespaces):

```
https://your-project-5000.app.github.dev
```

---

# 🔐 Authentication

## POST `/auth/social-login`

Login using Google OAuth (frontend sends ID token)

### Request:

```
{
  "provider": "google",
  "token": "GOOGLE_ID_TOKEN"
}
```

### Response:

```
{
  "session_token": "JWT_TOKEN",
  "user_id": "USER_ID"
}
```

---

# 🎮 Game APIs

## 👤 Get Profile

```
GET /game/profile
```

### Headers:

```
Authorization: JWT_TOKEN
```

### Response:

```
{
  "username": "Vivek",
  "email": "vivek@gmail.com",
  "coins": 0,
  "level": 1,
  "stamina": 100
}
```

---

## 💰 Add Coins

```
POST /game/add-coins
```

```
{
  "amount": 100
}
```

---

## ⚡ Use Stamina

```
POST /game/use-stamina
```

```
{
  "amount": 10
}
```

---

# 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code)
* Browser (for login UI)

---

# 🔐 Environment Variables

| Variable         | Description               |
| ---------------- | ------------------------- |
| PORT             | Server port               |
| MONGO_URI        | MongoDB connection string |
| JWT_SECRET       | Secret for JWT            |
| GOOGLE_CLIENT_ID | Google OAuth Client ID    |

---

# ⚠️ Limitations (Current Version)

This project is still under development:

* ❌ JWT Authentication fully implemented (in progress)
* ❌ Facebook / Play Games login
* ❌ Inventory system
* ❌ Purchase system
* ❌ Ads reward system
* ❌ Input validation
* ❌ Security hardening

---

# 🚀 Future Enhancements

* 🔐 Full JWT Authentication & Authorization
* 🌐 Multi-provider login (Google, Facebook, Play Games)
* 🎒 Inventory system
* 🛒 Shop & purchases
* 🎥 Ads reward system
* 🏆 Leaderboard
* ⚡ Real-time multiplayer (Socket.io)
* ☁️ Deployment (AWS / Docker)
* 🛡️ Anti-cheat & rate limiting

---

# 💡 Key Highlights

* Clean MVC architecture
* Beginner-friendly structure
* Scalable backend design
* Real game-ready foundation
* Easy to extend & maintain

---

# 👨‍💻 Author

**Vivek Joshi**

---

# 📄 License

This project is licensed under the **MIT License**.
