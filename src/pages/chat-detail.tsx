import { useParams } from "react-router-dom";
import { ChatDetailBody } from "~/components/chat/chat-detail/chat-detail-body";
import { ChatDetailBottomBar } from "~/components/chat/chat-detail/chat-detail-bottom-bar";
import { ChatDetailHead } from "~/components/chat/chat-detail/chat-detail-head";

function ChatDetailPage() {  
  let { userId } = useParams();

  return (
    <>
      <ChatDetailHead />
      <ChatDetailBody userId={userId} />
      <ChatDetailBottomBar />
    </>
  )
}

export default ChatDetailPage;