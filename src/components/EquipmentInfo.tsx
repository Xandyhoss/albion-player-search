import { Skull, Sword } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Equipment, Item } from "../utils/types";
import { EquipmentSlot } from "./EquipmentSlot";

type PropsType = {
  equipment: Equipment;
  type: "killer" | "victim";
  name: string;
  ip: number;
  id: string;
};

export function EquipmentInfo(props: PropsType) {
  const navigate = useNavigate();
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

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <p
          className="text-black text-xl mb-2 hover:bg-gray-400 transition-colors rounded px-2"
          onClick={() => navigate(`/player/${props.id}`)}
        >
          {props.name}
        </p>
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
            <EquipmentSlot item={bag} mount={false} />
            <EquipmentSlot item={head} mount={false} />
            <EquipmentSlot item={cape} mount={false} />
            <EquipmentSlot item={mainHand} mount={false} />
            <EquipmentSlot item={armor} mount={false} />
            <EquipmentSlot item={offHand} mount={false} />
            <EquipmentSlot item={potion} mount={false} />
            <EquipmentSlot item={shoes} mount={false} />
            <EquipmentSlot item={food} mount={false} />
            <EquipmentSlot item={mount} mount={true} />
          </div>
        </div>
        <p className="text-black text-xl">IP: {Math.round(props.ip)}</p>
      </div>
    </>
  );
}
