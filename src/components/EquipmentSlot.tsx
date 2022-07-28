import { Item, renderer } from "../utils/types";
import classNames from "classnames";

type PropsType = {
  item: Item | null;
  mount: true | false;
};

export function EquipmentSlot(props: PropsType) {
  return (
    <div
      className={classNames("bg-gray-400 flex justify-center items-center", {
        "col-start-2": props.mount,
        "col-end-3": props.mount,
      })}
    >
      {props.item != null ? (
        <img
          src={`${renderer}${props.item.Type}.png?quality=${props.item.Quality}`}
        />
      ) : (
        "EMPTY"
      )}
    </div>
  );
}
