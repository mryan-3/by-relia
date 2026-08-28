"use client";

import { useState, FormEvent } from "react";
import { ArrowUpRightIcon } from "@/components/ui/social-icons";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex items-center border-b border-neutral-700 pb-2 focus-within:border-white transition-colors"
    >
      <input
        type="email"
        required
        value={email}
        autoComplete="email"
        suppressHydrationWarning
        onChange={(e) => setEmail(e.target.value)}
        placeholder={submitted ? "Thank you for subscribing" : "Join our newsletter"}
        disabled={submitted}
        className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-hidden"
      />
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="text-neutral-400 hover:text-white transition-colors cursor-pointer pl-3"
      >
        <ArrowUpRightIcon className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
