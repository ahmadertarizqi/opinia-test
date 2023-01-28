import useBreakpoints from "~/hooks/use-breakpoints";

function ChatStartPage() {
  const breakpoints = useBreakpoints();

  if (breakpoints.isTabletOrMobile) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="mb-2">
        <img src="/assets/opinia-icon-logo.png" alt="opinia-logo" />
      </div>
      <h2 className="text-lg font-semibold text-neutral-600">Select a conversation or start new chat</h2>
    </div>
  )
}

export default ChatStartPage;