import { Outlet } from "react-router-dom";
import { ChatContainer } from "~/components/chat/chat-container";
import { ChatList } from "~/components/chat/chat-list";
import useBreakpoints from "~/hooks/use-breakpoints";

function ChatPage() {
  const breakpoints = useBreakpoints();
  return (
    <ChatContainer>
      <div className="w-full h-full shadow-sm border rounded-lg flex">
        <ChatList />
        {breakpoints.isDesktop ? (
          <div className="flex-1 hidden lg:flex flex-col">
            <Outlet />
          </div>
        ) : <Outlet />}
      </div>
    </ChatContainer>
  );
}

export default ChatPage;