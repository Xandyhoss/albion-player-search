const apiImgBaseUrl = "https://gameinfo.albiononline.com/api/gameinfo/items/";
const rock = `${apiImgBaseUrl}T8_ROCK/`;
const hide = `${apiImgBaseUrl}T8_HIDE/`;
const ore = `${apiImgBaseUrl}T8_ORE/`;
const fiber = `${apiImgBaseUrl}T8_FIBER/`;
const wood = `${apiImgBaseUrl}T8_WOOD/`;

type PropsType = {
  fiber: number;
  hide: number;
  ore: number;
  rock: number;
  wood: number;
};

export function GatheringFame(props: PropsType) {
  return (
    <div className="w-full">
      <div className="bg-orange-500 flex justify-center items-center py-1 w-full mt-4">
        <p className="text-2xl font-serif">GATHERING FAME</p>
      </div>
      <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[repeat(5,_1fr)] gap-1">
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <img src={fiber} className="w-10" />
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">{props.fiber.toLocaleString('pt-BR')}</p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <img src={hide} className="w-10" />
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">{props.hide.toLocaleString('pt-BR')}</p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <img src={ore} className="w-10" />
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">{props.ore.toLocaleString('pt-BR')}</p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <img src={rock} className="w-10" />
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">{props.rock.toLocaleString('pt-BR')}</p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <img src={wood} className="w-10" />
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">{props.wood.toLocaleString('pt-BR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
