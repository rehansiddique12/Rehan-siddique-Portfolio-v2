import "ldrs/react/Bouncy.css";
import { cn } from "@/lib/utils";
// import { Bouncy } from "ldrs/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { BotMessageSquare, CircleX, Send } from "lucide-react";

interface Message {
  sender: string;
  text: string;
  type: "user" | "ai";
  id?: string;
}

const Chatbord = () => {
  const [userInput, setUserInput] = useState("");
  const inputref = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState<boolean | undefined>(undefined);
  const [messages, setMessages] = useState<Message[]>([]);

  const n8nWebhookUrl =
    "https://n8n.scintia.ai/1306a6cb-608a-471a-a84b-f07f981c67da";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const userMessage: Message = {
      sender: "me",
      text: userInput,
      type: "user",
    };

    setMessages((prevMessages: Message[]) => [...prevMessages, userMessage]);
    setUserInput("");

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        sender: "AI",
        text: data.output,
        type: "ai",
      };

      setMessages((prevMessages: Message[]) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error communicating with n8n AI agent:", error);

      const errorMessage: Message = {
        sender: "AI",
        text: "Error: Could not get a response from the AI agent.",
        type: "ai",
      };

      setMessages((prevMessages: Message[]) => [...prevMessages, errorMessage]);
    }
  };

  useEffect(() => {
    if (open) {
      inputref.current?.focus();
    }
  }, [open]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="z-[10] right-6 md:right-8 fixed top-[43em] md:top-[47em] ">
        <button
          onClick={handleToggle}
          className="rounded-full items-center justify-center whitespace-nowrap  text-sm font-medium transition-transform duration-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#ffffff33),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:300%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95  p-4 inline-flex"
        >
          <BotMessageSquare
            className={cn("size-7  transition-all duration-500 ease-in-out", {
              "rotate-[360deg]": open,
            })}
          />
        </button>

        {open && (
          <div className="duration-700 absolute bottom-18  right-10 w-72 rounded-lg rounded-br-none shadow-xl z-50 overflow-hidden border-gray-400/15  bg-transparent backdrop-blur-md">
            <div className="flex items-center justify-between p-4">
              <span className="font-semibold text-xl">Chat Board</span>
              <Button
                size="sm"
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                <CircleX className="text-black" />
              </Button>
            </div>
            <div>
              <Separator className="bg-black" />
            </div>
            <div className="p-2 overflow-auto h-[465px] space-y-4">
              <div className="flex">
                <p className="text-[12px] bg-[#ffffff88] shadow-md text-black rounded-2xl rounded-tl-none py-2 px-3 text-justify w-67 break-words">
                  Hello! I am Rehan's AI assistant. You can ask me anything
                  about Rehan's portfolio, projects, or skills. How can I help
                  you ?
                </p>
              </div>

              {messages &&
                Array.isArray(messages) &&
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <p
                      className={`text-[12px] px-3 py-2 rounded-2xl max-w-xs break-words ${
                        msg.type === "user"
                          ? "text-white bg-black rounded-tr-none"
                          : "bg-[#ffffff88] shadow-md text-black rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </p>
                    {/* {
                      msg.type === "ai" && <p>Speak</p>
                    } */}
                  </div>
                ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex w-full items-center justify-center gap-2.5 border-black border-t p-2.5"
            >
              <Input
                ref={inputref}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask a question"
                className="bg-[linear-gradient(#ffffff33)"
              ></Input>
              <Button className=" cursor-pointer bg-[linear-gradient(#ffffff33),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbord;
