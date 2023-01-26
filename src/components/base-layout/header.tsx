export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="h-20 bg-white border-b flex items-center py-3">
        <div className="max-w-8xl mx-auto w-full px-5 flex items-center justify-between">
          <div>left</div>
          <div className="flex-none d-block w-36 mx-auto">
            <img src="/assets/opinia-logo.png" />
          </div>
          <div>right</div>
        </div>
      </div>
    </header>
  )
}
