import axios from "../utils/axios";
import { CaretDoubleLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { EquipmentInfo } from "./EquipmentInfo";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

type PropsType = {
  event: string;
  isLoading: Function;
};

interface Event {
  killFame: number;
  timestamp: string;
  killerName: string;
  killerIp: number;
  killerEquipment: Equipment;
  victimName: string;
  victimIp: number;
  victimEquipment: Equipment;
}

type Equipment = {
  MainHand: {
    Type: string;
    Quality: number;
  };
  OffHand: {
    Type: string;
    Quality: number;
  };
  Head: {
    Type: string;
    Quality: number;
  };
  Armor: {
    Type: string;
    Quality: number;
  };
  Shoes: {
    Type: string;
    Quality: number;
  };
  Bag: {
    Type: string;
    Quality: number;
  };
  Cape: {
    Type: string;
    Quality: number;
  };
  Mount: {
    Type: string;
    Quality: number;
  };
  Potion: {
    Type: string;
    Quality: number;
  };
  Food: {
    Type: string;
    Quality: number;
  };
};

export function KillDetails(props: PropsType) {
  const navigate = useNavigate();

  const [event, setEvent] = useState<Event>();

  const parseDataByEvent = async () => {
    try {
      props.isLoading(true);
      const response = await axios.get(`event/${props.event}`);
      setEvent(response.data);
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
    parseDataByEvent();
  }, []);

  return (
    <>
      {event && (
        <div className="w-full md:w-[98%] h-[auto] self-center bg-white bg-opacity-90 flex flex-col">
          <div className="bg-orange-500 w-full h-[35px] flex items-center justify-center">
            <CaretDoubleLeft
              onClick={() => navigate(-1)}
              className="absolute left-[25px] md:left-[55px] 2xl:left-[65px]"
              size={30}
            />
            <p className="text-2xl font-serif">KILL DETAILS</p>
          </div>
          <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_0.5fr_1fr] grid-rows-1 gap-2 py-3 px-5 w-full md:w-[80%] md:min-w-[850px] md:max-w-[1100px] self-center">
            <EquipmentInfo
              type="killer"
              equipment={event?.killerEquipment as Equipment}
              name={event.killerName}
              ip={event.killerIp}
            />
            <div className="flex flex-col justify-center items-center mt-5 mb-5 md:mt-0 md:mb-0">
              <p className="text-black text-xl font-bold">KILL FAME</p>
              <p className="text-red-800 text-2xl font-bold mt-[-10px]">
                {event.killFame.toLocaleString("pt-BR")}
              </p>
              <p className="text-black text-[1rem] font-bold mt-0 md:mt-4">DATE</p>
              <p className="text-gray-500 text-[1rem] font-bold mt-[-5px]">
                {event.timestamp}
              </p>
            </div>
            <EquipmentInfo
              type="victim"
              equipment={event?.victimEquipment as Equipment}
              name={event.victimName}
              ip={event.victimIp}
            />
          </div>
        </div>
      )}
    </>
  );
}
