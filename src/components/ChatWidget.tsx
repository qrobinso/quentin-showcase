import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ChatWidget = ({ isOpen, setIsOpen }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Quentin's AI assistant. I can answer questions about his career, projects, and patents. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm currently a demo assistant. In production, I'll be powered by an AI that knows all about Quentin's 16+ years of experience, 15 patents, and work on GenAI and IoT platforms at Amazon and Verizon."
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-primary text-primary-foreground">
      {/* Chat Messages Window */}
      {isOpen && (
        <div className="max-w-7xl mx-auto h-[400px] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary-foreground text-primary'
                        : 'bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {/* Chat Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="default"
            onClick={() => setIsOpen(!isOpen)}
            className="shrink-0"
          >
            {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
          </Button>
          
          <div className="flex-1 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything about Quentin's career, projects, and patents..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="default">
                <Send className="h-4 w-4" />
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
