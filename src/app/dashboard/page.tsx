"use client";
import React, { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  console.log("Dashboard Client Page component rendered");

  return (
    <div>
      <h1>Dashboard</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    </div>
  );
};

export default DashboardPage;
