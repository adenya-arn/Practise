import useAuthStore from "../../store/auth/authStore";
import React from "react";
import ReactDOM from "react-dom/client";

function App1() {
  const { isAuthenticated, login, logout } = useAuthStore();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{isAuthenticated ? "Welcome back" : "Please login"}</h1>
      <button onClick={login} style={{ marginRight: "1rem" }}>
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App1;
