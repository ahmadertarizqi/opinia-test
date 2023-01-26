import { Outlet } from "react-router-dom";
import { Header } from "./header";

function BaseLayout() {
  return (
    <div className="min-h-screen w-100 flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout;
