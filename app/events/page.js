"use client";

import { connectToStorage } from "@/utils/storage";

const EventsPage = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <h1>Events Page</h1>
      <button
        onClick={() => {
          connectToStorage();
        }}
      >
        Get auth token
      </button>
    </main>
  );
};

export default EventsPage;
