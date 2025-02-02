import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 border rounded-lg hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
