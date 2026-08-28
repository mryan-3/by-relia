import React from "react";

export function ArrowUpRightIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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
      <line x1="64" y1="192" x2="192" y2="64" />
      <polyline points="88 64 192 64 192 168" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <rect x="32" y="32" width="192" height="192" rx="48" />
      <circle cx="128" cy="128" r="40" />
      <circle cx="180" cy="76" r="8" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <rect x="36" y="36" width="184" height="184" rx="16" />
      <line x1="120" y1="112" x2="120" y2="176" />
      <line x1="88" y1="112" x2="88" y2="176" />
      <circle cx="88" cy="80" r="10" fill="currentColor" />
      <path d="M120,140a28,28,0,0,1,56,0v36" />
    </svg>
  );
}

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <line x1="48" y1="48" x2="208" y2="208" />
      <line x1="208" y1="48" x2="48" y2="208" />
    </svg>
  );
}
