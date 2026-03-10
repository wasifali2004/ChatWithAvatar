"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageSquare } from "lucide-react";

const AGENT_URL = "https://bey.chat/a4e08938-a4b8-4fa9-8ce5-850c2084a5e4";

export function ChatBot() {
  const [open, setOpen] = useState(false);
  // Mount the iframe once so the session persists while the panel is toggled
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Open the panel → mount the iframe immediately so it starts loading
  useEffect(() => {
    if (open && !mounted) setMounted(true);
  }, [open, mounted]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Restore persisted open state on mount and persist changes
  useEffect(() => {
    try {
      const stored = localStorage.getItem("chatbot-open");
      if (stored === "1") setOpen(true);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("chatbot-open", open ? "1" : "0");
    } catch (e) {}
  }, [open]);

  return (
    <div>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <Button
          aria-label={open ? "Close chat" : "Open chat"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-lg"
          variant="secondary"
          size="icon"
        >
          {open ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageSquare className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Chat Panel */}
      <div
        ref={containerRef}
        className={`fixed bottom-24 right-6 z-[50] transform-gpu transition-all duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="w-[380px] max-w-[calc(100vw-32px)] h-[580px] max-h-[85vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background shrink-0">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Chat with us</span>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="h-7 w-7"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* iframe container — takes all remaining space */}
          <div className="flex-1 min-h-0 bg-white dark:bg-card">
            {mounted && (
              <iframe
                src={AGENT_URL}
                width="100%"
                height="100%"
                frameBorder={0}
                // Do NOT use loading="lazy" — it can delay the call session start
                allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                title="Chat Avatar"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
