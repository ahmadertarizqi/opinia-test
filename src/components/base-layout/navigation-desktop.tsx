type MenuItemProps = {
  name: string;
  icon: string;
  path: string;
}

type NavigationDesktopProps = {
  items: Array<MenuItemProps>
}

export function NavigationDesktop({ items }: NavigationDesktopProps) {
  return (
    <nav className="flex flex-wrap items-center">
      {items.map((item, idx) => (
        <div className="flex-none d-block w-[60px]" key={idx}>
          <a href={item.path} className="h-12 flex items-center justify-center">
            <img src={item.icon} alt={item.name} />
          </a>
        </div>
      ))}
      <div className="flex-none d-block w-[60px]">
        <a href="#" className="flex items-center justify-center">
          <span className="flex items-center justify-center w-[50px] h-[50px]">
            <img src="/icons/menu-options.svg" />
          </span>
        </a>
      </div>
    </nav>
  )
}
