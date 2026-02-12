import { useState } from "react";
import { Send, Mic, Plus, RotateCw } from "lucide-react";

const Index = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-card shadow-2xl overflow-hidden flex flex-col" style={{ height: "min(85vh, 700px)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg font-[var(--font-heading)]">
              L
            </div>
            <div>
              <h1 className="text-base font-semibold text-card-foreground font-[var(--font-heading)]">
                LawGic.AI
              </h1>
              <p className="text-xs text-muted-foreground">
                No suit, No tie, Just AI legal guy
              </p>
            </div>
          </div>
          <button className="text-muted-foreground hover:text-card-foreground transition-colors">
            <RotateCw size={18} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center bg-secondary px-6">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold font-[var(--font-heading)] mb-4 shadow-lg">
            L
          </div>
          <h2 className="text-xl font-semibold text-card-foreground font-[var(--font-heading)]">
            LawGic.AI
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            No suit, No tie, Just AI legal guy
          </p>
        </div>

        {/* Input Area */}
        <div className="px-4 py-3 border-t border-border bg-card">
          <div className="flex items-center gap-2">
            <button className="text-muted-foreground hover:text-card-foreground transition-colors shrink-0">
              <Plus size={20} />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent text-card-foreground placeholder:text-muted-foreground text-sm outline-none py-2"
            />
            <button className="text-muted-foreground hover:text-card-foreground transition-colors shrink-0">
              {message.trim() ? <Send size={18} /> : <Mic size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
