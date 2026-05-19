"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm HiveForge's AI. Thinking about getting more jobs online? Ask me about packages, pricing, or what suits your trade.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.reply ||
            "Something went wrong — call Adule directly on 07340 499769.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Something went wrong — call Adule directly on 07340 499769.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] flex flex-col rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="bg-forge-navy px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-hive-orange flex items-center justify-center text-white font-bold text-xs shrink-0">
              H
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">HiveForge AI</p>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online now
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="bg-gray-50 flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] text-xs px-3 py-2 rounded-2xl leading-relaxed ${
                    msg.role === "user"
                      ? "bg-hive-orange text-white rounded-br-sm"
                      : "bg-white text-forge-black shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-3 py-2">
                  <span className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Phone fallback */}
          <div className="bg-white border-t border-gray-100 px-4 py-2 flex items-center gap-2">
            <Phone size={13} className="text-hive-orange shrink-0" />
            <a
              href="tel:+447340499769"
              className="text-xs text-forge-black/50 hover:text-hive-orange transition-colors"
            >
              Prefer to talk? <span className="font-semibold text-forge-black/70">07340 499769</span>
            </a>
          </div>

          {/* Input */}
          <div className="bg-white border-t border-gray-100 flex items-center gap-2 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about packages, pricing…"
              className="flex-1 text-xs bg-gray-100 rounded-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-hive-orange text-forge-black"
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="w-8 h-8 bg-hive-orange rounded-full flex items-center justify-center disabled:opacity-40 hover:bg-hive-orange/90 transition-colors"
              aria-label="Send message"
            >
              <Send size={13} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-hive-orange text-white font-bold px-5 py-3.5 rounded-full shadow-lg animate-pulse-glow hover:scale-105 transition-transform"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        <span className="hidden sm:inline">{open ? "Close" : "Chat with us"}</span>
      </button>
    </>
  );
}
