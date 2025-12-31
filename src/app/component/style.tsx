"use client";
import { useEffect, useState } from "react";

export default function AvailabilityText() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    }, 9000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-gray-100 font-semibold transition-opacity duration-500  ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      Im Available
    </p>
  );
}
