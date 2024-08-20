'use client';
import React from 'react';
import TypeSafeArray3D from './components/TypeSafeArray3D';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to TypeSafeArray</h1>
      <p className="text-lg text-gray-700">
        TypeSafeArray is a type-safe utility library for array manipulation in TypeScript.
      </p>
      <TypeSafeArray3D />
    </div>
  );
}
