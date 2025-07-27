import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiStatus, setApiStatus] = useState<string>("Loading...");
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Test API connection
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setApiStatus("Connected to NestJS API"))
      .catch((error) => setApiStatus("API connection failed"));

    // Fetch users from the API
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Full-Stack NestJS + React App</h1>
        <p>
          This React app is served by NestJS and can communicate with the
          backend API.
        </p>

        <div
          style={{
            margin: "20px 0",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "5px",
          }}
        >
          <strong>API Status:</strong> {apiStatus}
        </div>

        <div style={{ margin: "20px 0" }}>
          <h3>Users from API:</h3>
          {users.length > 0 ? (
            <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
              {users.map((user, index) => (
                <li key={index} style={{ padding: "5px 0" }}>
                  {user.name || user.email || `User ${index + 1}`}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found or API not connected</p>
          )}
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
