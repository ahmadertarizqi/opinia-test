import clsx from "clsx"
import { HTMLAttributes } from "react"

interface ChatWidgetBubbleProps extends HTMLAttributes<HTMLDivElement> {
  alignContent?: "end";
  message: string;
  time: string;
}

export function ChatWidgetBubble(
  { alignContent, className, message, time }: ChatWidgetBubbleProps
) {
  return (
    <div className={clsx(
      "flex", 
      (alignContent === "end") ? "justify-end pl-12" : "justify-start pr-12",
      className
    )}>
      <div className={clsx(
        "shadow py-1 px-3 rounded-2xl",
        (alignContent === "end") ? "rounded-br-none bg-primary-light" : "rounded-tl-none bg-white"
      )}>
        <span className="text-base text-neutral-800 block">{message}</span>
        <span className="text-xs text-neutral-500 block">{time}</span>
      </div>
    </div>
  )
}
