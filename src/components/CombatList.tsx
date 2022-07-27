import { Skull, Sword } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Kill, Death } from "../utils/types";

type PropsType = {
  type: "kill" | "death";
  data: Kill[] | Death[];
};

export function CombatList(props: PropsType) {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {props.data ? (
        <div>
          <div className="bg-orange-500 h-10 flex items-center justify-center mb-1">
            {props.type == "kill" ? (
              <>
                <Sword size={20} />
                <p className="font-serif text-xl">LAST KILLS</p>
              </>
            ) : (
              <>
                <Skull size={20} />
                <p className="font-serif text-xl">LAST DEATHS</p>
              </>
            )}
          </div>
          {props.data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/event/${item.eventId}`)}
                className="bg-white h-10 flex items-center justify-center mb-1 hover:bg-gray-200 transition-colors"
              >
                <p className="text-black text-[1.1rem]">
                  {props.type == "kill"
                    ? (item as Kill).victmin
                    : (item as Death).killer}{" "}
                  - {item.killFame.toLocaleString("pt-BR")}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {props.type == "kill" ? (
            <p className="text-black text-xl">NO RECENT KILLS</p>
          ) : (
            <p className="text-black text-xl">NO RECENT DEATHS</p>
          )}
        </div>
      )}
    </div>
  );
}
