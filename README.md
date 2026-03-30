# 🎮 Game Backend API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/license-MIT-blue)

A scalable and modular backend system built using **Node.js, Express, and MongoDB** to handle core game functionalities such as user management, coins, inventory, purchases, ads rewards, and subscriptions.

---

## 📌 Overview

This project provides a clean and extensible backend architecture for game development, supporting:

* 🔐 User authentication (Google login - basic)
* 💰 In-game currency system (coins)
* 🎒 Inventory and owned items
* 🛒 Purchase transactions & history
* 🎥 Reward-based ads system
* 🧠 Player progression (level & stamina)
* 💳 Subscription management

---

## 🛠️ Tech Stack

| Layer        | Technology             |
| ------------ | ---------------------- |
| Backend      | Node.js, Express.js    |
| Database     | MongoDB (Mongoose ODM) |
| Architecture | MVC                    |
| API Style    | RESTful APIs           |

---

## 📁 Project Structure

```
game-backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   └── Purchase.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── coinController.js
│   ├── purchaseController.js
│   └── adController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── coinRoutes.js
│   ├── purchaseRoutes.js
│   └── adRoutes.js
│
├── server.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone <your-repository-url>
cd game-backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/gameDB
```

---

### 4. Start Server

```
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔐 Authentication

**POST /auth/google**

```json
{
  "name": "VivekJoshi",
  "email": "vivekjoshi@gmail.com",
  "googleId": "123"
}
```

#### ✅ Response

```json
{
  "_id": "USER_ID",
  "name": "VivekJoshi",
  "coins": 0,
  "level": 1
}
```

---

### 👤 User

**GET /user/:id**

Fetch user profile data.

---

### 💰 Coins System

**POST /coin/add**

```json
{
  "userId": "USER_ID",
  "coins": 100
}
```

---

### 🛒 Purchase System

**POST /purchase/buy**

```json
{
  "userId": "USER_ID",
  "item": "Sword",
  "cost": 50
}
```

---

### 🎥 Ads Reward

**POST /ads/reward**

```json
{
  "userId": "USER_ID"
}
```

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code Extension)

---

## 🔐 Environment Variables

| Variable  | Description            |
| --------- | ---------------------- |
| PORT      | Server port            |
| MONGO_URI | MongoDB connection URL |

---

## ⚠️ Limitations (Current Version)

This project is currently a **learning/prototype backend**, and does not yet include:

* ❌ JWT Authentication (secure login)
* ❌ Input validation & sanitization
* ❌ Role-based access control
* ❌ Rate limiting / anti-cheat system

---

## 🚀 Future Enhancements

* 🔐 JWT Authentication & Authorization
* 🌐 Google, Facebook & Play Games OAuth
* 🏆 Leaderboard System
* ⚡ Real-time multiplayer (Socket.io)
* ☁️ Cloud deployment (AWS / Docker)
* 🛡️ Security improvements

---

## 💡 Key Highlights

* Clean and modular MVC architecture
* Scalable and maintainable structure
* Beginner-friendly yet production-inspired design
* Easy to extend for real-world applications

---

## 👨‍💻 Author

**Vivek Joshi**

---

## 📄 License

This project is licensed under the MIT License.
