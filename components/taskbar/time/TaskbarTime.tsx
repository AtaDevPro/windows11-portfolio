import { format } from "date-fns";

export default function TaskbarTime() {
  return (
    <button className=" flex flex-col items-center rounded-xl  px-3 py-3 text-white hover:bg-white/20 transition-all duration-200  ">
      <span className="text-sm font-medium">
        {format(new Date(), "h:mm a")}
      </span>
      <span className="text-xs">{format(new Date(), "EEE, MMM d")}</span>
    </button>
  );
}
