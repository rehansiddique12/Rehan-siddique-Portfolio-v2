import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fullName, profilePhoto } from "@/lib/constants";
import { ArrowUpIcon } from "./arrow-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Menu } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  firstName: string;
}

export function TubeLightNavBar({ items, className, firstName }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  // @ts-ignore
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the '#' from the id to match with our nav items
            const sectionName = entry.target.id;
            // Find the matching nav item and set it as active
            const matchingItem = items.find(
              (item) => item.url.substring(2) === sectionName
            );
            if (matchingItem) {
              setActiveTab(matchingItem.name);
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 50% of the section is visible
        rootMargin: "-50px 0px -50px 0px" // Adjust the margins as needed
      }
    );

    // Observe all sections
    items.forEach((item) => {
      const section = document.getElementById(item.url.substring(2));
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup observer
      observer.disconnect();
    };
  }, [items]);

  return (
    <div>
      {/* Desktop */}
      <div
        className={cn(
          "hidden lg:block fixed z-[50] top-0 left-1/2 -translate-x-1/2 mb-6 md:pt-8 pt-4",
          className
        )}
      >
        <div className="flex items-center gap-3 border border-myPalette4 backdrop-blur-sm py-2.5 px-3.5 rounded-full shadow-lg">
          <a
            href={"/#Hero"}
            className="flex items-center gap-2 mr-14"
          >
            <img
              className="w-12 aspect-square object-cover rounded-full"
              src={profilePhoto}
              alt={`${fullName} Profile Photo`}
            />
            <p className="font-myNameFont text-xl text-myPalette9">
              {firstName}
            </p>
          </a>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative text-base font-myMainFont font-semibold px-4.5 py-2.5 rounded-full transition-colors",
                  "text-myPalette9/80 hover:text-myPalette8 hover:bg-myPalette2",
                  isActive &&
                    "bg-myPalette9 hover:bg-myPalette9 text-myPalette1 hover:text-myPalette1"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-myPalette9 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-myPalette9 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-myPalette9/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-myPalette9/20 rounded-full blur-sm -top-1" />
                      <div className="absolute w-4 h-4 bg-myPalette9/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
          <a
            href="https://wa.me/+923247848493?text=Hello, How can I help you?"
            target="_blank"
            className="ml-14"
          >
            <ArrowUpIcon />
          </a>
        </div>
      </div>
      {/* Mobile */}
      <div
        className={cn(
          "block lg:hidden fixed z-[50] top-0 left-4 right-4 md:left-20 md:right-20 mb-6 md:pt-8 pt-4",
          className
        )}
      >
        <div className="w-full flex justify-between items-center gap-3 border border-myPalette4 backdrop-blur-sm py-2.5 px-3.5 rounded-full shadow-lg">
          <a
            href={"/#Hero"}
            className="flex items-center gap-2 mr-14"
          >
            <img
              className="w-10 md:w-12 aspect-square object-cover rounded-full"
              src={profilePhoto}
              alt={`${fullName} Profile Photo`}
            />
            <p className="font-myNameFont text-lg md:text-xl text-myPalette9">
              {firstName}
            </p>
          </a>
          <div className="flex flex-row items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {/* <MenuBtn /> */}
                <div className="text-myPalette9 px-2 py-2 mr-1 md:mr-2 bg-myPalette9 rounded-full">
                  <Menu size={22} className="text-myPalette1" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="mt-3 shadow-lg rounded-2xl"
                align="center"
              >
                <div className="p-2.5 flex flex-col border border-myPalette4 backdrop-blur-sm rounded-2xl">
                  {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;

                    return (
                      <a
                        key={item.name}
                        href={item.url}
                        onClick={() => setActiveTab(item.name)}
                        className={cn(
                          "relative text-sm md:text-base font-myMainFont font-semibold px-4.5 py-2.5 rounded-full transition-colors",
                          "text-myPalette9/80 hover:text-myPalette8 hover:bg-myPalette2",
                          isActive &&
                            "bg-myPalette9 hover:bg-myPalette9 text-myPalette1 hover:text-myPalette1"
                        )}
                      >
                        <span className="hidde md:inline">{item.name}</span>
                        <span className="md: hidden">
                          <Icon size={18} strokeWidth={2.5} />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="https://wa.me/+92344603782?text=Hello, How can I help you?"
              target="_blank"
            >
              <ArrowUpIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
