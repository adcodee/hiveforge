"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hf_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("hf_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("hf_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-forge-black text-white rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl border border-white/10">
        <p className="text-sm text-white/70 flex-1 leading-relaxed">
          We use cookies to improve your experience and analyse site traffic. See our{" "}
          <a href="/privacy" className="text-hive-orange underline hover:text-hive-amber">
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded-xl border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded-xl bg-hive-orange text-white font-bold hover:bg-hive-orange/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
