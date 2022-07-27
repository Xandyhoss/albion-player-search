import { Skull, Sword } from "phosphor-react";
import { Equipment, Item } from "../utils/types";

type PropsType = {
  equipment: Equipment;
  type: "killer" | "victim";
  name: string;
  ip: number;
};

export function EquipmentInfo(props: PropsType) {
  //Set equipment from props
  const bag = props.equipment.Bag ? (props.equipment.Bag as Item) : null;
  const head = props.equipment.Head ? (props.equipment.Head as Item) : null;
  const cape = props.equipment.Cape ? (props.equipment.Cape as Item) : null;
  const mainHand = props.equipment.MainHand
    ? (props.equipment.MainHand as Item)
    : null;
  const armor = props.equipment.Armor ? (props.equipment.Armor as Item) : null;
  const offHand = props.equipment.OffHand
    ? (props.equipment.OffHand as Item)
    : mainHand?.Type.includes("2H")
    ? mainHand
    : null;
  const potion = props.equipment.Potion
    ? (props.equipment.Potion as Item)
    : null;
  const shoes = props.equipment.Shoes ? (props.equipment.Shoes as Item) : null;
  const food = props.equipment.Food ? (props.equipment.Food as Item) : null;
  const mount = props.equipment.Mount ? (props.equipment.Mount as Item) : null;

  const renderer = `https://render.albiononline.com/v1/item/`;

  return (
    <div className="w-full h-full flex flex-col items-center">
      <p className="text-black text-xl mb-2">{props.name}</p>
      <div className="w-full h-full bg-gray-300">
        <div className="bg-orange-500 w-full h-7 flex justify-center items-center">
          {props.type == "killer" ? (
            <>
              <Sword size={20} />
              <p className="text-xl font-serif">KILLER'S EQUIPMENT</p>
            </>
          ) : (
            <>
              <Skull size={20} />
              <p className="text-xl font-serif">VICTIM'S EQUIPMENT</p>
            </>
          )}
        </div>
        <div className="grid grid-cols-[repeat(3,_minmax(0,90px))] grid-rows-[repeat(4,_minmax(0,90px))] justify-center my-5 gap-2">
          <div className="bg-gray-400 flex justify-center items-center">
            {bag != null ? (
              <img src={`${renderer}${bag.Type}.png?quality=${bag.Quality}`} />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {head != null ? (
              <img
                src={`${renderer}${head.Type}.png?quality=${head.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {cape != null ? (
              <img
                src={`${renderer}${cape.Type}.png?quality=${cape.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {mainHand != null ? (
              <img
                src={`${renderer}${mainHand.Type}.png?quality=${mainHand.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {armor != null ? (
              <img
                src={`${renderer}${armor.Type}.png?quality=${armor.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {offHand != null ? (
              <img
                src={`${renderer}${offHand.Type}.png?quality=${offHand.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {potion != null ? (
              <img
                src={`${renderer}${potion.Type}.png?quality=${potion.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {shoes != null ? (
              <img
                src={`${renderer}${shoes.Type}.png?quality=${shoes.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {food != null ? (
              <img
                src={`${renderer}${food.Type}.png?quality=${food.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 col-start-2 col-end-3 flex justify-center items-center">
            {mount != null ? (
              <img
                src={`${renderer}${mount.Type}.png?quality=${mount.Quality}`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
        </div>
      </div>
      <p className="text-black text-xl">IP: {Math.round(props.ip)}</p>
    </div>
  );
}
