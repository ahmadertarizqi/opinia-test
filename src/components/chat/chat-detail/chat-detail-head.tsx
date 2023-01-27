import { Avatar } from "~/components/common/avatar";

export function ChatDetailHead() {
  return (
    <div className="flex-none h-12 flex items-center justify-between border-b px-3">
      <div className="flex-1 flex items-center">
        <Avatar src="/img/users/user1.png" size="sm" className="flex-none d-block" />
        <div className="flex-1 px-3 overflow-hidden">
          <h4 className="text-base text-neutral-800 font-semibold truncate leading-5">Oktavia Nanda</h4>
          <p className="text-xs text-slate-500 truncate leading-3">UX Writer</p>
        </div>
      </div>
      <div className="ml-auto flex-none block">
        <span className="w-6 h-6 cursor-pointer">
          <img src="/icons/action.svg" alt="icon-action" />
        </span>
      </div>
    </div>
  )
}