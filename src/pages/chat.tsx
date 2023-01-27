import { Outlet } from "react-router-dom";
import { ChatContainer } from "~/components/chat/chat-container";
import { ChatList } from "~/components/chat/chat-list";

function ChatPage() {
  return (
    <ChatContainer>
      <div className="w-full h-full shadow-sm border rounded-lg flex">
        <ChatList />
        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </ChatContainer>
  );
}

export default ChatPage;