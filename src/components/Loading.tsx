import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="bg-black bg-opacity-70 z-10 min-w-full min-h-screen absolute flex items-center justify-center">
      <CircleNotch size={80} className="text-orange-500 animate-spin" />
    </div>
  );
}
