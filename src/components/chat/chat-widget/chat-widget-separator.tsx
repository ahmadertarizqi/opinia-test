type ChatWidgetSeparator = {
  description?: string;
}

export function ChatWidgetSeparator({ description }: ChatWidgetSeparator) {
  return (
    <div className="flex justify-center items-center gap-3 !my-4">
      <span className="border-b-2 border-primary-light flex-1"></span>
      <span className="text-base text-neutral-600 font-medium">{description}</span>
      <span className="border-b-2 border-primary-light flex-1"></span>
    </div>
  )
}