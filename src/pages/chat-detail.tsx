import { useParams } from "react-router-dom";
import { ChatDetailHead } from "~/components/chat/chat-detail/chat-detail-head";

function ChatDetailPage() {  
  let { userId } = useParams();

  return (
    <>
      <ChatDetailHead />
      <div className="flex-1 overflow-hidden">
        <div className="relative h-full bg-neutral-100">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img src="/img/chat-background.png" className="w-full h-full object-cover" alt="chat-background" />
          </div>
          <div className="relative p-3 h-full overflow-y-auto">
            <h1 className="bg-white inline-block shadow py-1 px-2 rounded-md">userID {userId}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, adipisci amet aperiam reiciendis neque nulla, placeat facere possimus facilis deleniti harum a animi corporis! Magni!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatDetailPage;