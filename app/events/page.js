"use client";

import { useState } from "react";

const EventsPage = () => {
  const [token, setToken] = useState();

  const getAuthToken = async () => {
    const res = await fetch("http://localhost:3000/api/get-auth-token");
    const data = await res.json();
    setToken(data.token);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <h1>Events Page</h1>
      <button onClick={() => getAuthToken()}>Get auth token</button>
    </main>
  );
};

export default EventsPage;
