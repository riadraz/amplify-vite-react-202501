import React from "react";

export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="w-full p-2 border rounded-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
