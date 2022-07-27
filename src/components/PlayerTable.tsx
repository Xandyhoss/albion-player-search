import { useNavigate } from "react-router-dom";
import { PlayerBasic } from "../utils/types";

type PropsType = {
  players: PlayerBasic[];
};

export function PlayerTable(props: PropsType) {
  const navigate = useNavigate();
  function navigateToPlayer(Id: string) {
    navigate(`/player/${Id}`);
  }
  return (
    <table className="mt-4 w-full md:w-[70%]">
      <thead className="bg-orange-500 text-xl">
        <tr>
          <th scope="col" className="font-normal py-1 px-6">
            NAME
          </th>
          <th
            scope="col"
            className="font-normal py-1 px-6 hidden md:table-cell"
          >
            GUILD
          </th>
          <th
            scope="col"
            className="font-normal py-1 px-6 hidden md:table-cell"
          >
            ALLIANCE
          </th>
          <th scope="col" className="font-normal py-1 px-6">
            PVP FAME
          </th>
          <th scope="col" className="font-normal py-1 px-6">
            RATIO
          </th>
        </tr>
      </thead>
      <tbody className="bg-white bg-opacity-90 text-black text[1.5rem] text-center">
        {props.players.map((player, index) => {
          return (
            <tr
              onClick={() => navigateToPlayer(player.id)}
              key={index}
              className="hover:bg-gray-300 hover:bg-opacity-90 transition-colors"
            >
              <td className="p-[0.4rem]">{player.name}</td>
              <td className="p-[0.4rem] hidden md:table-cell">
                {player.guild ? player.guild : "--"}
              </td>
              <td className="p-[0.4rem] hidden md:table-cell">
                {player.alliance ? player.alliance : "--"}
              </td>
              <td>{player.pvpFame.toLocaleString("pt-BR")}</td>
              <td>{player.ratio}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
