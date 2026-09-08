"use client";

import { useState } from "react";
import { MessageCircle, ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const DEMO_CONVERSATION = [
  {
    role: "bot",
    text: "Hi — this is a labelled HiveForge demo, not a client. Ask about a website, an app, or a full operator system.",
  },
  {
    role: "user",
    text: "We need a booking site and a staff app for the drivers.",
  },
  {
    role: "bot",
    text: "That's the operator system — same shape as Patch Access. Customer web £400, driver portal £250, admin desk £350. Full package is £2,000 + VAT.",
  },
  {
    role: "user",
    text: "What about just a website first?",
  },
  {
    role: "bot",
    text: "Core website is £997 one-off, live in 48 hours. Growth retainer is £97/month if you want the chatbot and SEO posts kept on.",
  },
  {
    role: "user",
    text: "And we only pay if we're happy?",
  },
  {
    role: "bot",
    text: "Yes. No deposit. You walk if it isn't right. Want Adule to quote your exact scope? Use the form or call 07340 499769.",
  },
];

export default function ChatbotDemo() {
  const [step, setStep] = useState(0);

  const visible = DEMO_CONVERSATION.slice(0, step + 1);
  const isDone = step >= DEMO_CONVERSATION.length - 1;
  const nextLine = !isDone ? DEMO_CONVERSATION[step + 1] : null;

  const advance = () => {
    if (!isDone) setStep((s) => s + 1);
  };

  return (
    <section id="chatbot" className="py-20 md:py-28 bg-gradient-to-br from-forge-navy via-forge-navy to-[#0d2f4f] relative overflow-hidden noise-overlay">
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
          <div>
            <p className="text-hive-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Design &amp; AI
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              AI on the product,{" "}
              <span className="text-gradient-orange">not a gimmick widget</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Chat on the site, quotes, or a full assistant. This window is a labelled demo — the prices in it are the same ones on this page.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Answers enquiries when you are not at the desk",
                "Knows website and software prices",
                "Books a call or captures lead details",
                "Hands off to Adule when needed",
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
              See prices
            </a>
          </div>
          </Reveal>

          <Reveal delay={200}>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              <div className="bg-gray-900 rounded-[2rem] p-3 shadow-2xl ring-1 ring-white/10">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  <div className="bg-forge-navy px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-hive-orange flex items-center justify-center text-white font-bold text-xs shrink-0">
                      HF
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Demo chatbot</p>
                      <p className="text-green-400 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                        Online now
                      </p>
                    </div>
                  </div>

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
                    {nextLine?.role === "bot" && (
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

                  {/* Tappable next line instead of a text box that (previously)
                      ignored whatever you actually typed and advanced the
                      script regardless - honest about being scripted rather
                      than pretending to read input. */}
                  <div className="p-3 border-t border-gray-100 bg-white min-h-[52px] flex items-center">
                    {nextLine?.role === "user" ? (
                      <button
                        onClick={advance}
                        className="w-full text-left text-xs bg-hive-orange/10 text-hive-orange font-medium rounded-full px-4 py-2.5 hover:bg-hive-orange/20 transition-colors"
                      >
                        Tap: &ldquo;{nextLine.text}&rdquo;
                      </button>
                    ) : (
                      !isDone && (
                        <p className="text-xs text-forge-black/30 px-1">Demo chat — tap below to continue</p>
                      )
                    )}
                  </div>
                </div>

                {!isDone && (
                  <button
                    onClick={advance}
                    className="w-full mt-3 flex items-center justify-center gap-1.5 text-white/50 text-xs py-1 hover:text-white/80 transition-colors"
                  >
                    Continue demo <ArrowDown size={12} />
                  </button>
                )}
              </div>
              <p className="text-center text-white/30 text-xs mt-4">
                Demo — labelled, with the prices from this page
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
