import { Item, renderer } from "../utils/types";
import classNames from "classnames";

type PropsType = {
  item: Item | null;
  mount: true | false;
};

export function EquipmentSlot(props: PropsType) {
  return (
    <div
      className={classNames("relative bg-gray-400 flex justify-center items-center", {
        "col-start-2": props.mount,
        "col-end-3": props.mount,
      })}
    >
      {props.item != null ? (
        <>
          <div className="absolute right-[18px] bottom-[12px]">
            {props.item.Count}
          </div>
          <img
            src={`${renderer}${props.item.Type}.png?quality=${props.item.Quality}`}
          />
        </>
      ) : (
        "EMPTY"
      )}
    </div>
  );
}
