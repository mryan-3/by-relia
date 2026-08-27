import React from "react";

export function HeartIcon({
  filled = false,
  className = "w-4 h-4",
}: {
  filled?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "16"}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" />
    </svg>
  );
}

export function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="116" cy="116" r="84" />
      <line x1="175.4" y1="175.4" x2="224" y2="224" />
    </svg>
  );
}

export function UserIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="128" cy="96" r="64" />
      <path d="M32,216c19.4-44.5,57.1-64,96-64s76.6,19.5,96,64" />
    </svg>
  );
}
