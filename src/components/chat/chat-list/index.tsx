import { ChatListForm } from "./chat-list-form";
import { ChatListHead } from "./chat-list-head";
import { ChatListUser } from "./chat-list-user";

export function ChatList() {
  return (
    <div className="flex-none w-full lg:w-[360px] lg:border-r flex flex-col">
      <ChatListHead />
      <ChatListForm />
      <ChatListUser />
    </div>
  )
}