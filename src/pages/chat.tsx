import { ChatContainer } from "~/components/chat/chat-container";
import { ChatList } from "~/components/chat/chat-list";

function ChatPage() {
  return (
    <ChatContainer>
      <div className="w-full h-full shadow-sm border rounded-lg flex">
        <ChatList />
        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam recusandae sed vitae inventore impedit at numquam reprehenderit laudantium error cumque eveniet non ad natus!
        </div>
      </div>
    </ChatContainer>
  );
}

export default ChatPage;