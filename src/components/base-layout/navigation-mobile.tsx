export function NavigationMobile() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-12 border-t shadow-sm-reverse">
      <nav className="flex items-stretch h-full bg-white px-4">
        <a href="#" className="flex-1 flex items-center justify-center">
          <img src="/icons/home.svg" />
        </a>
        <a href="#" className="flex-1 flex items-center justify-center">
          <img src="/icons/search.svg" />
        </a>
        <a href="/" className="flex-1 flex items-center justify-center">
          <img src="/icons/chat.svg" />
        </a>
        <a href="#" className="flex-1 flex items-center justify-center">
          <img src="/icons/group.svg" />
        </a>
      </nav>
    </div>
  )
}