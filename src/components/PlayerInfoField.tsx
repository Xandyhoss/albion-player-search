type PropsType = {
  info: string | number;
  field: string;
};

export function PlayerInfoField(props: PropsType) {
  return (
    <div className="flex mb-1">
      <div className="bg-orange-500 flex justify-center items-center py-1 w-36">
        <p className="text-2xl font-serif">{props.field}</p>
      </div>
      <div className="bg-white w-52 text-black flex justify-center items-center ">
        <p className="text-2xl">{props.info ? props.info : "--"}</p>
      </div>
    </div>
  );
}
