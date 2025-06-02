# ✨ ThetaChat – Full Stack Realtime Chat App 🚀

A sleek, real-time chat application built with cutting-edge web technologies. Whether you're messaging friends or showcasing your dev skills — **ThetaChat** is here to impress!

![Screenshot](https://your-screenshot-url-if-any)

---

## 🔥 Tech Stack

- ⚛️ **Frontend:** React + Vite + TailwindCSS + DaisyUI  
- 🧠 **State Management:** Zustand  
- 🔐 **Auth:** JWT-based Authentication & Authorization  
- 📦 **Backend:** Node.js + Express + MongoDB (MERN)  
- 📡 **Realtime:** Socket.IO for live messaging & online status  
- ☁️ **Media Uploads:** Cloudinary integration  

---

## ✨ Key Features

- 💬 Real-time 1:1 messaging  
- 👀 Online user presence  
- 🔐 Secure authentication (JWT + bcrypt)  
- 📸 Profile picture upload via Cloudinary  
- 🌐 Persistent sessions via HTTP-only cookies  
- 🧩 Modular, scalable codebase  
- ⚠️ Robust error handling on client and server  
- 🎨 Clean UI built with TailwindCSS + DaisyUI  
- 🚀 Production-ready + free deployment (Render, Vercel, etc.)

---

## 🛠️ Environment Variables

Create a `.env` file in the root with the following:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
