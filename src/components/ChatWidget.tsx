import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
interface Message {
  role: 'user' | 'assistant';
  content: string;
}
interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}
export const ChatWidget = ({
  isOpen,
  setIsOpen
}: ChatWidgetProps) => {
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: "Hi! I'm Quentin's AI assistant. I can answer questions about his career, projects, and patents. What would you like to know?"
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { messages: newMessages }
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      const assistantMessage = data?.choices?.[0]?.message?.content;
      if (assistantMessage) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: assistantMessage
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-primary text-primary-foreground">
      {/* Chat Messages Window */}
      {isOpen && <div className="max-w-7xl mx-auto h-[400px] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, idx) => <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg px-4 py-2 ${message.role === 'user' ? 'bg-primary-foreground text-primary' : 'bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20'}`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>)}
            </div>
          </ScrollArea>
        </div>}

      {/* Chat Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <Button variant="ghost" size="default" onClick={() => setIsOpen(!isOpen)} className="shrink-0 group relative w-full md:w-auto">
            {isOpen ? <X className="h-5 w-5" /> : <div className="flex items-center gap-2 justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <Sparkles className="h-5 w-5 relative z-10" />
                </div>
                <span className="text-sm font-medium">Ask Que's AI</span>
              </div>}
          </Button>
          
          {(!isMobile || isOpen) && (
            <div className="flex-1 flex gap-2">
                <Input 
                  value={input} 
                  onChange={e => setInput(e.target.value)} 
                  onKeyPress={e => e.key === 'Enter' && !isLoading && handleSend()} 
                  placeholder="Ask me anything about Quentin's career, projects, and patents..." 
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSend} 
                  size="default" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  disabled={isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
            </div>
          )}
        </div>
      </div>
    </div>;
};