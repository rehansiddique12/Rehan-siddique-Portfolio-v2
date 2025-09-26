import { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { BotMessageSquare, CircleX, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
const Chatbord = () => {
  const [open, setOpen] = useState<boolean | undefined>(undefined);
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="z-[10] right-6 md:right-8 fixed top-[45em] md:top-[47em] ">
        <button
          onClick={handleToggle}
          className="rounded-full items-center justify-center whitespace-nowrap  text-sm font-medium bg-[linear-gradient(#ffffff33) ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 ,linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95  p-4 inline-flex"
        >
          <BotMessageSquare
            className={cn("size-7  transition-all duration-500 ease-in-out", {
              "rotate-[360deg]": open,
            })}
          />
        </button>

        {open && (
          <div className="duration-700 absolute bg-[linear-gradient(#ffffff33) bottom-16  right-10 w-72 rounded-lg rounded-br-none shadow-xl z-50 overflow-hidden border-gray-400/15  bg-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between p-4">
              <span className="font-semibold text-xl">Chat Board</span>
              <Button size="sm">
                <CircleX className="text-black" />
              </Button>
            </div>
            <div>
              <Separator className="bg-black" />
            </div>
            <div className="p-2 overflow-auto h-[465px] space-y-4">
              <div className="flex">
                <p className="text-[12px] bg-white text-black rounded-2xl rounded-tl-none py-2 px-3 text-justify w-67 break-words">
                  Hello! I am Rehan's AI assistant. You can ask me anything
                  about Rehan's portfolio, projects, or skills. How can I help
                  you ?
                </p>
              </div>

              <div className="flex justify-end">
                <p className="text-[12px] text-white bg-black px-3 py-2 rounded-2xl rounded-tr-none max-w-xs break-words">
                  hi Rehan how are you?
                </p>
              </div>
            </div>
            <form  className="flex w-full items-center justify-center gap-2.5 border-black border-t p-2.5">
               <Input placeholder="Ask a question"></Input>
               <Button className=" cursor-pointer bg-[linear-gradient(#00000033,#00000033),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]"><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbord;
