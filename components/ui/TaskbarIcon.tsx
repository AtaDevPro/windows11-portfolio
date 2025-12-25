import clsx from "clsx";
import Image from "next/image";

interface TaskbarItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
}

function TaskbarIcon({
  icon,
  label,
  isActive = false,
  onClick,
  className,
}: TaskbarItemProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={clsx(
        "relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-200",
        "hover:bg-white/20",
        isActive && "bg-white/30",
        "group"
      )}
    >
      <div className="relative h-8 w-8">
        <Image
          src={icon}
          alt={label}
          fill
          className={`object-contain ${className}`}
        />
      </div>

      {isActive && (
        <div className="absolute bottom-1 w-1 h-1 bg-white rounded-full" />
      )}

      <span className="absolute bottom-14 left-1/2 -translate-x-1/2 px-3 py-1 text-sm bg-black/80 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

export default TaskbarIcon;
