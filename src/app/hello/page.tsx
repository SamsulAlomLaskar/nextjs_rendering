import React from "react";

const AboutPage = () => {
  console.log("AboutPage component rendered");

  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
};

export default AboutPage;
