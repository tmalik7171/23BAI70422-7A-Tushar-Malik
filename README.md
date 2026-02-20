# 🚀 Experiment 4 – Advanced React State Management

## 📌 Overview

This experiment is an extension of Experiment 3 (Multi-Page React Application using React Router).

In this update, the project has been enhanced using advanced React concepts including:

- Context API (Global State Management)
- useReducer (Structured State Updates)
- useMemo (Performance Optimization)
- One New Page integrated using React Router

The UI design remains consistent with Experiment 3 while adding improved functionality and structured state handling.

---

## 🎯 Objective

- To understand and implement global state using Context API.
- To manage complex state transitions using useReducer.
- To optimize derived computations using useMemo.
- To extend a multi-page React application while maintaining UI/UX consistency.

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- React Bootstrap
- Vite
- JavaScript (ES6+)
- CSS

---

## 📂 Project Structure

src/
│
├── components/
│   └── Navbar.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.jsx
│
├── Pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Analytics.jsx   (New Page Added)
│
├── App.jsx
├── main.jsx
└── index.css

---

## 🔥 Features Implemented

### 1️⃣ Multi-Page Navigation (React Router)

- Home Page
- About Page
- Contact Page
- Analytics Page (New)

Navigation is handled using react-router-dom with proper routing configuration.

---

### 2️⃣ Context API (Global State)

A global context provider is created to manage shared application state across multiple components. This eliminates prop drilling and ensures centralized state management.

---

### 3️⃣ useReducer (Structured State Management)

Reducer is implemented for predictable state updates.

Actions Implemented:
- ADD_ITEM
- REMOVE_ITEM
- CLEAR_ITEMS

This ensures controlled and scalable state transitions.

---

### 4️⃣ useMemo (Performance Optimization)

useMemo is used to compute derived data efficiently such as:

- Total items count
- Summary calculations

This prevents unnecessary recalculations and improves performance.

---

## 🧠 Application Flow

1. User triggers an action (e.g., Add Item).
2. Action is dispatched using dispatch().
3. Reducer processes the action and updates the state.
4. Updated state re-renders the UI.
5. Derived values are optimized using useMemo.

---

## 📷 Screenshots

Screenshots are stored inside the /screenshots folder.

Example:
- Home Page
- Analytics Page
- Navigation View

---

## 🌐 Deployment

Project deployed using Vercel.

Deployment format followed:
{uid}-4-{name}.vercel.app

Example:
24bda70021-4-yourname.vercel.app

---

## 🎓 Learning Outcomes

- Implemented global state management using Context API.
- Managed structured state transitions using useReducer.
- Optimized rendering performance using useMemo.
- Extended a multi-page React application professionally.

---

## ✅ Conclusion

Experiment 4 successfully enhances the multi-page React application by integrating advanced state management techniques. The project demonstrates proper architecture, optimized performance, and scalable state handling using modern React hooks.