import { Avatar } from "~/components/common/avatar";

type ChatItemUser = {
  photo?: string;
  name: string;
  message: string;
  date: string;
  isRead?: boolean;
}

function ChatItemUser(props: ChatItemUser) {
  return (
    <div className="px-3 flex items-center flex-wrap h-16">
      <Avatar src={props.photo ? props.photo : "/img/users/user-placeholder.png"} className="flex-none block" />
      <div className="flex-1 pl-2 overflow-hidden">
        <h4 className="text-base text-neutral-800 font-semibold truncate">{props.name}</h4>
        <p className="text-sm text-slate-500 truncate">{props.message}</p>
      </div>
      <div className="flex-none w-16 flex flex-col items-end">
        <span className="block text-xs text-slate-500 text-right mb-1">{props.date}</span>
        {!props.isRead ? (
          <span className="flex items-center justify-center text-xs text-white w-4 h-4 bg-red-500 rounded-full">
            2
          </span>
        ) : null}
      </div>
    </div>
  )
}

export function ChatListUser() {
  return (
    <div className="flex-1 overflow-y-auto">
      <ChatItemUser 
        photo="/img/users/user1.png"
        name="Oktada" 
        message="Selamat siang Adam" 
        date="28 Sep 22" 
      />
      <ChatItemUser 
        photo="/img/users/user2.png"
        name="Resti Ananda" 
        message="Sama sama" 
        date="26 Sep 22" 
        isRead 
      />
    </div>
  )
}