import { Item, renderer } from "../utils/types";

type PropsType = {
  items: Item[];
};

export function VictimInventory(props: PropsType) {
  const addDefaultSrc = (e: any) => {
    e.target.src = `${renderer}T8_TRASH.png`;
  };
  return (
    <div className="w-full h-auto bg-gray-300">
      <div className="h-7 bg-orange-500">
        <p className="text-xl font-serif flex justify-center items-center">
          VICTIM'S INVENTORY
        </p>
      </div>
      <div className="grid grid-cols-[repeat(8,_minmax(0,90px))] grid-rows-[1fr] gap-2 p-5">
        {props.items.map((item, index) => {
          if (item != null && item.Type != undefined) {
            return (
              <div
                key={index}
                className="relative bg-gray-400 h-[90px] w-[90px] flex"
              >
                <div className="absolute right-[18px] bottom-[12px]">
                  {item.Count}
                </div>
                <img
                  onError={(e) => addDefaultSrc(e)}
                  src={`${renderer}${item.Type}.png?quality=${item.Quality}`}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
