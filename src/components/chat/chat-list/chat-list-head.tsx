export function ChatListHead() {
  return (
    <div className="flex-none h-12 flex items-center justify-between px-3">
      <h2 className="text-xl font-semibold">Pesan</h2>
      <div className="ml-auto flex-none block">
        <span className="w-6 h-6 cursor-pointer">
          <img src="/icons/action.svg" alt="icon-action" />
        </span>
      </div>
    </div>
  )
}