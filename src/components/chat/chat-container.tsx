type ChatContainerProps = {
  children?: React.ReactNode;
}

export function ChatContainer({ children }: ChatContainerProps) {
  return (
    <div className="h-screen lg:h-[calc(100vh-5rem)] lg:py-4">
      <div className="mx-auto max-w-[937px] w-full h-full">
        {children}
      </div>
    </div>
  )
}
