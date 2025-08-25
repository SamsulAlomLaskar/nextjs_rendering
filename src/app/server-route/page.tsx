import { serverSideFunction } from "@/utils/server-utils";
import React from "react";

const ServerRoutePage = () => {
  console.log("Server Route Page Rendered");

  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
    </>
  );
};

export default ServerRoutePage;
