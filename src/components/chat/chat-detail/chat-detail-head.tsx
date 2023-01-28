import { useNavigate } from "react-router-dom";
import { Avatar } from "~/components/common/avatar";
import useBreakpoints from "~/hooks/use-breakpoints";

function getPerson(userId: string | number) {
  const name = (
    (userId === "1") ? "Oktavia Ananda" :
    (userId === "2") ? "Resti Ananda" :
    "---"
  );
  const image = (
    (userId === "1") ? "/img/users/user1.png" :
    (userId === "2") ? "/img/users/user2.png" :
    "/img/users/user-placeholder.png"
  );
  return { name, image };
}

export function ChatDetailHead(props: any) {
  const navigate = useNavigate();
  const breakpoints = useBreakpoints();

  const person = getPerson(props.userId);

  return (
    <div className="flex-none h-12 flex items-center justify-between border-b px-3 bg-white">
      {breakpoints.isTabletOrMobile ? (
        <div className="flex-none block w-8 h-full">
          <span 
            className="w-full h-full cursor-pointer flex items-center justify-start"
            onClick={() => navigate("/chat")}
          >
            <img src="/icons/back.svg" alt="icon-action" />
          </span>  
        </div>
      ) : null}
      <div className="flex-1 flex items-center">
        <Avatar src={person.image} size="sm" className="flex-none d-block" />
        <div className="flex-1 px-3 overflow-hidden">
          <h4 className="text-base text-neutral-800 font-semibold truncate leading-5">{person.name}</h4>
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