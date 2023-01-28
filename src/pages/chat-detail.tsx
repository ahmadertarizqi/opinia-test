import { useParams } from "react-router-dom";
import { ChatDetailBody } from "~/components/chat/chat-detail/chat-detail-body";
import { ChatDetailBottomBar } from "~/components/chat/chat-detail/chat-detail-bottom-bar";
import { ChatDetailHead } from "~/components/chat/chat-detail/chat-detail-head";
import useBreakpoints from "~/hooks/use-breakpoints";

function ChatDetailMobileWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="bg-white w-full h-full">
        {children}
      </div>
    </div>
  )
}

function ChatDetailPage() {  
  let { userId } = useParams();
  const breakpoints = useBreakpoints();

  if (breakpoints.isDesktop) {
    return (
      <>
        <ChatDetailHead />
        <ChatDetailBody userId={userId} />
        <ChatDetailBottomBar />
      </>
    )
  }

  return (
    <ChatDetailMobileWrapper>
      <ChatDetailHead />
      <ChatDetailBody userId={userId} />
      <ChatDetailBottomBar />
    </ChatDetailMobileWrapper>
  )
}

export default ChatDetailPage;