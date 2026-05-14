"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const DEMO_CONVERSATION = [
  {
    role: "bot",
    text: "Hi! I'm the AI assistant for Dave's Plumbing. How can I help you today?",
  },
  {
    role: "user",
    text: "My boiler stopped working this morning — it's making a banging noise.",
  },
  {
    role: "bot",
    text: "Sorry to hear that! A banging boiler usually means a blockage or kettling. Dave covers emergency call-outs across Exeter 7 days a week. Can I grab your postcode to confirm you're in the area?",
  },
  {
    role: "user",
    text: "EX4 4QJ",
  },
  {
    role: "bot",
    text: "Perfect — that's covered. Dave's earliest slot today is 2 pm. Emergency call-out is £85 + parts. Shall I book that in, or would you prefer Dave to give you a quick call first?",
  },
  {
    role: "user",
    text: "Please get him to call me.",
  },
  {
    role: "bot",
    text: "Done! Dave will call you within 30 minutes. While you wait, make sure your boiler pressure is above 1 bar — there's a guide on the website if needed. Anything else?",
  },
];

export default function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");

  const visible = DEMO_CONVERSATION.slice(0, step + 1);
  const isDone = step >= DEMO_CONVERSATION.length - 1;

  const advance = () => {
    if (!isDone) setStep((s) => s + 1);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setInput("");
    if (!isDone) setStep((s) => s + 1);
  };

  return (
    <section id="chatbot" className="py-20 md:py-28 bg-gradient-to-br from-forge-navy via-forge-navy to-[#0d2f4f] relative overflow-hidden noise-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Growth &amp; Full Retainer
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Your site books jobs{" "}
              <span className="text-gradient-orange">while you sleep</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Every Growth and Full Retainer client gets a trained AI chatbot that answers customer questions, gives quotes, and books jobs — 24 hours a day, 7 days a week.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Answers emergency enquiries at midnight",
                "Knows your prices, area, and services",
                "Books jobs or captures lead details",
                "Hands off to you when needed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-hive-orange mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-hive-orange text-white font-bold px-6 py-3.5 rounded-xl forge-glow hover:scale-[1.02] transition-transform"
            >
              <MessageCircle size={18} />
              Get a chatbot on your site
            </a>
          </div>

          {/* Demo chat window */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              {/* Phone chrome */}
              <div className="bg-gray-900 rounded-[2rem] p-3 shadow-2xl ring-1 ring-white/10">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  {/* Chat header */}
                  <div className="bg-forge-navy px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-hive-orange flex items-center justify-center text-white font-bold text-xs shrink-0">
                      D
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Dave's Plumbing AI</p>
                      <p className="text-green-400 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                        Online now
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
                    {visible.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] text-xs px-3 py-2 rounded-2xl leading-relaxed ${
                            msg.role === "user"
                              ? "bg-hive-orange text-white rounded-br-sm"
                              : "bg-white text-forge-black shadow-sm border border-gray-100 rounded-bl-sm"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {!isDone && (
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
                  </div>

                  {/* Input */}
                  <div className="flex items-center gap-2 p-3 border-t border-gray-100 bg-white">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type a message…"
                      className="flex-1 text-xs bg-gray-100 rounded-full px-3 py-2 focus:outline-none text-forge-black"
                    />
                    <button
                      onClick={handleSend}
                      disabled={isDone}
                      className="w-7 h-7 bg-hive-orange rounded-full flex items-center justify-center disabled:opacity-40"
                    >
                      <Send size={12} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Advance button below phone */}
                {!isDone && (
                  <button
                    onClick={advance}
                    className="w-full mt-3 text-white/50 text-xs py-1 hover:text-white/80 transition-colors"
                  >
                    Continue demo ↓
                  </button>
                )}
              </div>
              <p className="text-center text-white/30 text-xs mt-4">
                Demo — this is how your AI chatbot works
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
