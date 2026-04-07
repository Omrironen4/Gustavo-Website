// app/about/page.tsx
import React from 'react';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Gustavo</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        This is the about page. Add info about Gustavo or the organization here.
      </p>
    </main>
  );
}