import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, X, Bot, User, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm AgenticBot, your AI assistant. How can I help you today?",
    "Hi there! Welcome to AgenticSoft. What would you like to know about our AI solutions?",
    "Greetings! I'm here to help you learn about our services and answer your questions."
  ],
  services: [
    "We offer four main services: AI Agentic Solutions, Custom Software Development, Process Automation, and Website Design. Which one interests you most? Visit our Services page for detailed information.",
    "Our expertise spans AI agents, custom software, workflow automation, and modern web development. Check out our Services section to learn more!"
  ],
  ai: [
    "Our AI Agentic Solutions create intelligent agents that work autonomously, learn from interactions, and adapt to your business needs. They can reduce operational costs by 40% and increase efficiency by 60%. Visit our Services page to learn more!",
    "AI agents are our specialty! They handle complex tasks automatically, use machine learning to improve over time, and provide 24/7 operations. Would you like to see our AI projects in our Portfolio?"
  ],
  software: [
    "We build custom software tailored to your exact requirements using modern technologies. Our solutions are scalable, secure, and come with ongoing support. Check out our Portfolio for examples!",
    "Custom software development is one of our core strengths. We work with cloud-native architectures and ensure perfect alignment with your business goals. Visit our Services page for more details."
  ],
  automation: [
    "Process automation can save you 20+ hours per week and reduce errors by 95%. We analyze your workflows and implement intelligent automation solutions. See our automation projects in our Portfolio!",
    "Our automation solutions streamline operations, integrate with existing systems, and provide real-time monitoring and compliance features. Learn more in our Services section."
  ],
  contact: [
    "You can reach us through multiple channels! Use our Contact page, call our offices in Kuwait (+965 xxxx xxxx), UAE (+971 xxxx xxxx), Turkey (+90 xxxx xxxx), or Pakistan (+92 xxxx xxxx).",
    "We have offices in Kuwait, Turkey, UAE, and Pakistan. Visit our Contact page for detailed office information and our contact form, or email us at info@agenticsoft.com."
  ],
  pricing: [
    "Pricing varies based on project scope and requirements. I'd recommend visiting our Contact page to schedule a free consultation where our experts can provide a detailed quote tailored to your needs.",
    "Each project is unique, so we provide custom quotes. Visit our Contact page to get in touch with our sales team for a personalized discussion!"
  ],
  portfolio: [
    "We've successfully delivered 500+ projects across various industries! Check out our Portfolio page to see featured case studies including healthcare AI platforms, e-commerce automation, and FinTech solutions.",
    "Our Portfolio showcases amazing projects like AI-powered patient management systems, automated e-commerce workflows, and custom financial platforms. Visit our Portfolio page to explore them!"
  ],
  about: [
    "AgenticSoft has been leading AI innovation since 2016 with offices across Kuwait, Turkey, UAE, and Pakistan. Visit our About page to learn more about our mission, values, and expert team.",
    "We're a global AI solutions provider with 8+ years of experience and a team of 50+ experts. Check out our About page to discover our journey and meet our team!"
  ],
  default: [
    "That's an interesting question! For detailed technical discussions, I'd recommend speaking with our expert team. Visit our Contact page to get in touch!",
    "I'd be happy to help! For specific technical requirements, our specialists can provide detailed guidance. Check out our Contact page to arrange a consultation.",
    "Great question! Our team of experts would be the best to provide detailed information about that. Visit our Contact page to schedule a call!"
  ]
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm AgenticBot, your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomResponse = (responses: string[]) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return getRandomResponse(predefinedResponses.greeting);
    }
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offerings') || message.includes('solutions')) {
      return getRandomResponse(predefinedResponses.services);
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('agent') || message.includes('machine learning') || message.includes('ml')) {
      return getRandomResponse(predefinedResponses.ai);
    }
    
    if (message.includes('software') || message.includes('development') || message.includes('custom') || message.includes('application') || message.includes('app')) {
      return getRandomResponse(predefinedResponses.software);
    }
    
    if (message.includes('automation') || message.includes('process') || message.includes('workflow') || message.includes('streamline')) {
      return getRandomResponse(predefinedResponses.automation);
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('office') || message.includes('reach') || message.includes('get in touch')) {
      return getRandomResponse(predefinedResponses.contact);
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote') || message.includes('pricing') || message.includes('budget')) {
      return getRandomResponse(predefinedResponses.pricing);
    }
    
    if (message.includes('portfolio') || message.includes('projects') || message.includes('work') || message.includes('examples') || message.includes('case study')) {
      return getRandomResponse(predefinedResponses.portfolio);
    }
    
    if (message.includes('about') || message.includes('company') || message.includes('team') || message.includes('history') || message.includes('who are you')) {
      return getRandomResponse(predefinedResponses.about);
    }
    
    if (message.includes('website') || message.includes('web design') || message.includes('web development')) {
      return "We create stunning, responsive websites that combine beautiful design with powerful functionality. Our web solutions are mobile-first, SEO-optimized, and can increase conversions by 30%. Check out our Services page for more details!";
    }
    
    if (message.includes('kuwait') || message.includes('turkey') || message.includes('uae') || message.includes('pakistan') || message.includes('office') || message.includes('location')) {
      return "We have offices in Kuwait City (headquarters), Dubai (UAE), Istanbul (Turkey), and Karachi (Pakistan). Each office specializes in different services and serves local markets. Visit our Contact page for specific office details!";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with today?";
    }
    
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
      return "Thank you for visiting AgenticSoft! Feel free to reach out anytime. Have a great day!";
    }
    
    return getRandomResponse(predefinedResponses.default);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(userMessage.content),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-brand-blue hover:bg-brand-dark shadow-lg hover:shadow-xl transition-all duration-300"
              size="icon"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
            <motion.div
              className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.3 }}
            >
              Need help? Chat with AgenticBot!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`w-80 shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-96'}`}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-brand-blue text-white rounded-t-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AgenticBot</h3>
                    <p className="text-xs text-blue-100">Online • Typically replies instantly</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-white hover:bg-white/20"
                    onClick={() => setIsMinimized(!isMinimized)}
                  >
                    <Minimize2 className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-white hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <CardContent className="p-0 h-64 overflow-y-auto">
                    <div className="p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.sender === 'user' ? 'bg-brand-blue ml-2' : 'bg-gray-200 mr-2'
                            }`}>
                              {message.sender === 'user' ? (
                                <User className="w-3 h-3 text-white" />
                              ) : (
                                <Bot className="w-3 h-3 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <div className={`rounded-lg p-3 ${
                                message.sender === 'user'
                                  ? 'bg-brand-blue text-white'
                                  : 'bg-gray-100 text-gray-900'
                              }`}>
                                <p className="text-sm">{message.content}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 px-1">
                                {formatTime(message.timestamp)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                              <Bot className="w-3 h-3 text-gray-600" />
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </CardContent>

                  {/* Input */}
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={handleSendMessage}
                        size="icon"
                        className="bg-brand-blue hover:bg-brand-dark"
                        disabled={isTyping || !inputValue.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge 
                        variant="secondary" 
                        className="text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => setInputValue("What services do you offer?")}
                      >
                        Services
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => setInputValue("Tell me about AI solutions")}
                      >
                        AI Solutions
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => setInputValue("Show me your portfolio")}
                      >
                        Portfolio
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => setInputValue("Contact information")}
                      >
                        Contact
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="text-xs cursor-pointer hover:bg-gray-200 transition-colors"
                        onClick={() => setInputValue("Get a quote")}
                      >
                        Pricing
                      </Badge>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}