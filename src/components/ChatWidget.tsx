import { useState, useEffect, useRef } from "react";
import { Sparkles, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import ReactMarkdown from "react-markdown";

const SAMPLE_PROMPTS = [
  "What's Quentin's largest customer facing impact?",
  "What B2B services has Quentin worked on?",
  "This portfolio page is cool, is it available on Github?",
  "How can I get in contact with Quentin?",
  "What's his latest work?",
  "What does he do for fun?",
  "Would Quentin be a great fit for my company?",
  "Tell me more about his side projects",
  "What consumer electronics has Quentin built?",
  "Does Quentin have experience leading product teams?",
  "What technologies does Quentin specialize in?",
  "Can you share examples of Quentin's product launches?",
  "What industries has Quentin worked in?",
  "Does Quentin have any awards or recognition?",
  "What's Quentin's approach to product development?",
  "Has Quentin worked at any notable companies?",
  "What skills make Quentin stand out as a product leader?"
];
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
    content: "Hey there! I'm Quentin's AI agent. I can help answer questions about his career, projects or help you get in contact with him. What would you like to do?"
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('');
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typing animation effect
  useEffect(() => {
    if (input) return; // Don't animate if user is typing
    
    const currentPrompt = SAMPLE_PROMPTS[currentPromptIndex];
    let charIndex = 0;
    
    // Type characters one by one
    const typingInterval = setInterval(() => {
      if (charIndex < currentPrompt.length) {
        setPlaceholderText(currentPrompt.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Wait 3-4 seconds then clear and move to next prompt
        setTimeout(() => {
          setPlaceholderText('');
          // Select a random prompt different from the current one
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * SAMPLE_PROMPTS.length);
          } while (nextIndex === currentPromptIndex && SAMPLE_PROMPTS.length > 1);
          setCurrentPromptIndex(nextIndex);
        }, 3500);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, [currentPromptIndex, input]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Automatically open chat window when user sends a message
    if (!isOpen) {
      setIsOpen(true);
    }
    
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
  return <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 animated-gradient-bg text-primary-foreground">
      {/* Chat Messages Window */}
      {isOpen && <div className="max-w-7xl mx-auto h-[400px] flex flex-col animate-in slide-in-from-bottom-4 duration-300 backdrop-blur-sm bg-primary/30">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, idx) => <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg px-4 py-2 backdrop-blur-md ${message.role === 'user' ? 'bg-primary-foreground text-primary' : 'bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20'}`}>
                    <div className="text-sm markdown-content">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>)}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px] bg-primary-foreground/20" />
                      <Skeleton className="h-4 w-[200px] bg-primary-foreground/20" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </div>}

      {/* Chat Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="default" onClick={() => setIsOpen(!isOpen)} className="shrink-0 group relative">
            {isOpen ? <X className="h-5 w-5" /> : <div className="flex items-center gap-2">
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
                  placeholder={placeholderText || "Ask me anything..."} 
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