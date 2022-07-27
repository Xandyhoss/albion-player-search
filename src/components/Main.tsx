import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";
import { Search } from "./Search";
import { PlayerInfo } from "./PlayerInfo";
import logo from "/src/assets/img/aps-logo.png";
import { KillDetails } from "./KillDetails";

export function Main() {
  const { id } = useParams<{ id: string }>();
  const { event } = useParams<{ event: string }>();

  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen bg-cover bg-no-repeat bg-albion bg-center grid grid-rows-[auto_1fr] md:p-10 p-5 justify-items-center">
        <img className=" w-auto z-0" src={logo}></img>
        <div className="min-h-full min-w-full flex flex-col justify-center">
          {id && <PlayerInfo id={id} isLoading={setLoading}/>}
          {event && <KillDetails event={event} isLoading={setLoading} />}
          {!id && !event && <Search isLoading={setLoading} />}
        </div>
      </div>
    </>
  );
}
