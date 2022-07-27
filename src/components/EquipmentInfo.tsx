import { Equipment, Item } from "../utils/types";

type PropsType = {
  equipment: Equipment;
  type: "killer" | "victim";
  name: string;
  ip: number;
};

export function EquipmentInfo(props: PropsType) {
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
          <p className="text-xl font-serif">
            {props.type == "killer"
              ? "KILLER'S EQUIPMENT"
              : "VICTIM'S EQUIPMENT"}
          </p>
        </div>
        <div className="grid grid-cols-[repeat(3,_minmax(0,90px))] grid-rows-[repeat(4,_minmax(0,90px))] justify-center my-5 gap-2">
          <div className="bg-gray-400 flex justify-center items-center">
            {bag != null ? (
              <img
                src={`${renderer}${(bag as Item).Type}.png?quality=${
                  (bag as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {head != null ? (
              <img
                src={`${renderer}${(head as Item).Type}.png?quality=${
                  (head as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {cape != null ? (
              <img
                src={`${renderer}${(cape as Item).Type}.png?quality=${
                  (cape as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {mainHand != null ? (
              <img
                src={`${renderer}${(mainHand as Item).Type}.png?quality=${
                  (mainHand as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {armor != null ? (
              <img
                src={`${renderer}${(armor as Item).Type}.png?quality=${
                  (armor as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {offHand != null ? (
              <img
                src={`${renderer}${(offHand as Item).Type}.png?quality=${
                  (offHand as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {potion != null ? (
              <img
                src={`${renderer}${(potion as Item).Type}.png?quality=${
                  (potion as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {shoes != null ? (
              <img
                src={`${renderer}${(shoes as Item).Type}.png?quality=${
                  (shoes as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 flex justify-center items-center">
            {food != null ? (
              <img
                src={`${renderer}${(food as Item).Type}.png?quality=${
                  (food as Item).Quality
                }`}
              />
            ) : (
              "EMPTY"
            )}
          </div>
          <div className="bg-gray-400 col-start-2 col-end-3 flex justify-center items-center">
            {mount != null ? (
              <img
                src={`${renderer}${(mount as Item).Type}.png?quality=${
                  (mount as Item).Quality
                }`}
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
