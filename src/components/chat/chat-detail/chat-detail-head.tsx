import { useNavigate } from "react-router-dom";
import { Avatar } from "~/components/common/avatar";
import useBreakpoints from "~/hooks/use-breakpoints";

export function ChatDetailHead() {
  const navigate = useNavigate();
  const breakpoints = useBreakpoints();

  return (
    <div className="flex-none h-12 flex items-center justify-between border-b px-3 bg-white">
      {breakpoints.isTabletOrMobile ? (
        <div className="flex-none block w-8 h-full">
          <span 
            className="w-full h-full cursor-pointer flex items-center justify-start"
            onClick={() => navigate(-1)}
          >
            <img src="/icons/back.svg" alt="icon-action" />
          </span>  
        </div>
      ) : null}
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