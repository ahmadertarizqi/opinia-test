export function ChatWidgetWrapper(
  { children }: { children?: React.ReactNode }
) {
  return (
    <div className="relative px-3 py-4 h-full overflow-y-auto space-y-3">
      {children}
    </div>
  )
}