"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageSquare } from "lucide-react";

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // Do not close the chat when clicking outside — keep conversation active
  }, [open]);

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
      <div className="fixed bottom-6 right-6 z-60">
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
        className={`fixed bottom-20 right-6 z-50 transform-gpu transition-opacity transition-transform duration-200 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[85vh] bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-background/80">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="font-semibold">Chat with us</span>
            </div>
            <div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="h-full bg-white dark:bg-card">
            {open && (
              <iframe
                src="https://bey.chat/a4e08938-a4b8-4fa9-8ce5-850c2084a5e4"
                width="100%"
                height="100%"
                frameBorder={0}
                loading="lazy"
                allowFullScreen
                allow="camera; microphone; fullscreen"
                style={{
                  border: "none",
                  maxWidth: "100%",
                  height: "calc(100% - 48px)",
                }}
                title="Support Chat"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
