import * as React from "react";
import {
  motion,
  useMotionValue,
  AnimatePresence,
  type HTMLMotionProps,
  type SpringOptions,
} from "motion/react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
 

export type MouseTrackerContextType = {
  position: { x: number; y: number };
  active: boolean;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  pointerRef: React.RefObject<HTMLDivElement | null>;
};

const MouseTrackerContext = React.createContext<
  MouseTrackerContextType | undefined
>(undefined);

export const useMouseTracker = (): MouseTrackerContextType => {
  const context = React.useContext(MouseTrackerContext);
  if (!context) {
    throw new Error("useMouseTracker must be used within MouseTrackerProvider");
  }
  return context;
};

export type MouseTrackerProviderProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

function MouseTrackerProvider({
  ref,
  children,
  ...rest
}: MouseTrackerProviderProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [active, setActive] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const pointerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const container = wrapper.parentElement;
    if (!container) return;

    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    const updatePosition = (e: MouseEvent) => {
      const bounds = container.getBoundingClientRect();
      setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
      setActive(true);
    };

    const clearPosition = () => setActive(false);

    container.addEventListener("mousemove", updatePosition);
    container.addEventListener("mouseleave", clearPosition);

    return () => {
      container.removeEventListener("mousemove", updatePosition);
      container.removeEventListener("mouseleave", clearPosition);
    };
  }, []);

  return (
    <MouseTrackerContext.Provider
      value={{ position, active, wrapperRef, pointerRef }}
    >
      <div ref={wrapperRef} data-role="tracker-wrapper" {...rest}>
        {children}
      </div>
    </MouseTrackerContext.Provider>
  );
}

export type PointerProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

function Pointer({ ref, className, style, children, ...rest }: PointerProps) {
  const { position, active, wrapperRef, pointerRef } = useMouseTracker();
  React.useImperativeHandle(ref, () => pointerRef.current as HTMLDivElement);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  React.useEffect(() => {
    const container = wrapperRef.current?.parentElement;
    if (container && active) container.style.cursor = "none";

    return () => {
      if (container) container.style.cursor = "default";
    };
  }, [active, wrapperRef]);

  React.useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          ref={pointerRef}
          data-role="custom-pointer"
          className={cx(
            "pointer-events-none z-[9999] absolute transform -translate-x-1/2 -translate-y-1/2",
            className
          )}
          style={{ top: y, left: x, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type Anchor =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"
  | "center";

export type PointerFollowerProps = HTMLMotionProps<"div"> & {
  align?: Anchor;
  gap?: number;
  transition?: SpringOptions;
  children: React.ReactNode;
};

function PointerFollower({
  ref,
  align = "bottom-right",
  gap = 20,
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  children,
  className,
  style,
  ...rest
}: PointerFollowerProps) {
  const { position, active, pointerRef } = useMouseTracker();
  const followerRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => followerRef.current as HTMLDivElement);

  const getOffset = React.useCallback(() => {
    const box = followerRef.current?.getBoundingClientRect();
    const w = box?.width ?? 0;
    const h = box?.height ?? 0;

    switch (align) {
      case "center":
        return { x: w / 2, y: h / 2 };
      case "top":
        return { x: w / 2, y: h + gap };
      case "top-left":
        return { x: w + gap, y: h + gap };
      case "top-right":
        return { x: -gap, y: h + gap };
      case "bottom":
        return { x: w / 2, y: -gap };
      case "bottom-left":
        return { x: w + gap, y: -gap };
      case "bottom-right":
        return { x: -gap, y: -gap };
      case "left":
        return { x: w + gap, y: h / 2 };
      case "right":
        return { x: -gap, y: h / 2 };
      default:
        return { x: 0, y: 0 };
    }
  }, [align, gap]);

  const offset = getOffset();
  const pointerBox = pointerRef.current?.getBoundingClientRect();
  const pw = pointerBox?.width ?? 20;
  const ph = pointerBox?.height ?? 20;

  const x = position.x - offset.x + pw / 2;
  const y = position.y - offset.y + ph / 2;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          ref={followerRef}
          data-role="pointer-follower"
          className={cx(
            "pointer-events-none z-[9998] absolute transform -translate-x-1/2 -translate-y-1/2 font-medium",
            className
          )}
          style={{ top: y, left: x, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export {
  MouseTrackerProvider,
  Pointer,
  PointerFollower,
  useMouseTracker as useCustomMouseTracker,
  type MouseTrackerContextType as CursorContextType,
  type MouseTrackerProviderProps as CursorProviderProps,
  type PointerProps as CursorProps,
  type PointerFollowerProps as CursorFollowProps,
};
