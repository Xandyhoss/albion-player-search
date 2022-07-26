type PropsType = {
  royal: number;
  out: number;
  avalon: number;
  hg: number;
  cdg: number;
  total: number;
};

export function PveFamePerArea(props: PropsType) {
  return (
    <div className="w-full">
      <div className="bg-orange-500 flex justify-center items-center py-1 w-full mt-4">
        <p className="text-2xl font-serif">PVE FAME PER AREA(%)</p>
      </div>
      <div className="grid grid-cols-[repeat(5,_1fr)] gap-1">
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <p className="text-[1rem] font-serif">ROYAL</p>
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">
              {((props.royal / props.total) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <p className="text-[1rem] font-serif">OUTLANDS</p>
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">
              {((props.out / props.total) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <p className="text-[1rem] font-serif">AVALON</p>
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">
              {((props.avalon / props.total) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <p className="text-[1rem] font-serif">HELLGATES</p>
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">
              {((props.hg / props.total) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-1">
          <div className="w-full flex justify-center items-center bg-orange-500 h-10">
            <p className="text-[1rem] font-serif">CORRUPTED</p>
          </div>
          <div className="w-full flex justify-center items-center bg-white h-10">
            <p className="text-xl font-serif text-black">
              {((props.cdg / props.total) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
