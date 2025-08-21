"use client";
import React, { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  console.log("Dashboard Client Page component rendered");

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "30%",
          padding: "5px",
          marginBottom: "16px",
          border: "1px solid #ccc",
          borderRadius: "7px",
        }}
      />
      <p>Hello {name}</p>
    </div>
  );
};

export default DashboardPage;
