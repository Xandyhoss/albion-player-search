import axios from "../utils/axios";
import { AxiosError } from "axios";
import { CaretDoubleLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CombatList } from "./CombatList";
import { GatheringFame } from "./GatheringFame";
import { PlayerInfoField } from "./PlayerInfoField";
import { PveFamePerArea } from "./PveFamePerArea";

type PropsType = {
  id: string;
  isLoading: Function;
};

interface Player {
  name: string;
  guild: string;
  alliance: string;
  pvpFame: number;
  ratio: number;
  id: string;
  pveFame: {
    Total: number;
    Royal: number;
    Outlands: number;
    Avalon: number;
    Hellgate: number;
    CorruptedDungeon: number;
  };
  gatheringFame: {
    Fiber: {
      Total: number;
    };
    Hide: {
      Total: number;
    };
    Ore: {
      Total: number;
    };
    Rock: {
      Total: number;
    };
    Wood: {
      Total: number;
    };
  };
}

interface Kill {
  eventId: number;
  victmin: string;
  killFame: number;
  timestamp: Date;
}

interface Death {
  eventId: number;
  killer: string;
  killFame: number;
  timestamp: Date;
}

export function PlayerInfo(props: PropsType) {
  const [player, setPlayer] = useState<Player>();
  const [kills, setKills] = useState<Kill[]>();
  const [deaths, setDeaths] = useState<Death[]>();

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const parseDataById = async () => {
    try {
      props.isLoading(true);
      const response = await axios.get(`/id/${id}`);
      const kills = await axios.get(`/id/${id}/kills`);
      const deaths = await axios.get(`/id/${id}/deaths`);
      setPlayer(response.data);
      setKills(kills.data);
      setDeaths(deaths.data);
    } catch (error) {
      if ((error as AxiosError).response?.status !== 202) {
        console.log("Something Went Wrong");
        navigate("/");
      }
    } finally {
      props.isLoading(false);
    }
  };

  useEffect(() => {
    parseDataById();
  }, []);

  return (
    <>
      {player && (
        <div className="w-[98%] h-[auto] self-center bg-white bg-opacity-90 flex flex-col items-center">
          <div className="bg-orange-500 h-[35px] w-full flex items-center justify-center">
            <CaretDoubleLeft
              onClick={() => navigate(-1)}
              className="absolute left-[55px] 2xl:left-[65px]"
              size={30}
            />
            <p className="text-2xl font-serif">PLAYER INFO </p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-2 p-3 w-[95%] min-w-[850px] max-w-[1100px]">
            <div className="w-full flex-col flex items-center ">
              <PlayerInfoField field="NAME" info={player?.name} />
              <PlayerInfoField field="GUILD" info={player?.guild} />
              <PlayerInfoField field="ALLIANCE" info={player?.alliance} />
              <PlayerInfoField
                field="PVP FAME"
                info={player?.pvpFame.toLocaleString("pt-BR")}
              />
              <PlayerInfoField
                field="PVE FAME"
                info={player?.pveFame.Total.toLocaleString("pt-BR")}
              />

              <PveFamePerArea
                royal={player.pveFame.Royal}
                out={player.pveFame.Outlands}
                avalon={player.pveFame.Avalon}
                hg={player.pveFame.Hellgate}
                cdg={player.pveFame.CorruptedDungeon}
                total={player.pveFame.Total}
              />

              <GatheringFame
                fiber={player.gatheringFame.Fiber.Total}
                hide={player.gatheringFame.Hide.Total}
                ore={player.gatheringFame.Ore.Total}
                rock={player.gatheringFame.Rock.Total}
                wood={player.gatheringFame.Wood.Total}
              />
            </div>
            <div className="w-full grid grid-cols-[1fr_1fr] gap-2">
              <CombatList type="kill" data={(kills as Kill[])} />
              <CombatList type="death" data={deaths as Death[]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
