import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { NavigationMobile } from "./navigation-mobile";
import useBreakpoints from "~/hooks/use-breakpoints";

function BaseLayout() {
  const breakpoints = useBreakpoints();
  return (
    <div className="min-h-screen w-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-20 flex flex-col">
        <Outlet />
      </main>
      {breakpoints.isTabletOrMobile ? <NavigationMobile /> : null}
    </div>
  )
}

export default BaseLayout;
