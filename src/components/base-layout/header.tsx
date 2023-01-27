import { FormGroup } from "../forms/form-group";
import { InputText } from "../forms/input-text";
import { NavigationDesktop } from "./navigation-desktop";
import useBreakpoints from "~/hooks/use-breakpoints";

const menus = [
  { 
    name: "home",
    icon: "/icons/home.svg",
    path: "#",
  },
  { 
    name: "chat",
    icon: "/icons/chat.svg",
    path: "/",
  },
  {
    name: "group",
    icon: "/icons/group.svg",
    path: "#",
  },
  {
    name: "notification",
    icon: "/icons/notification.svg",
    path: "#",
  },
  {
    name: "pop reward",
    icon: "/icons/pop-reward.svg",
    path: "#",
  }
];

export function Header() {
  const breakpoints = useBreakpoints();

  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="h-20 bg-white border-b flex items-center py-3">
        <div className="max-w-8xl mx-auto w-full px-5 flex items-center justify-between">
          <div className="flex-none d-block w-full lg:w-72">
            <FormGroup isRelative>
              <span className="absolute inset-y-0 left-0 w-10 flex items-center justify-center">
                <img src="/icons/search.svg" />
              </span>
              <InputText placeholder="Cari di Opinia" className="pl-10" />
            </FormGroup>
          </div>

          {breakpoints.isDesktop ? (
            <>
              <div className="flex-1">
                <img src="/assets/opinia-logo.png" className="d-block mx-auto" />
              </div>
              <div className="flex-none d-block w-96 text-right">
                <NavigationDesktop items={menus} />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  )
}
