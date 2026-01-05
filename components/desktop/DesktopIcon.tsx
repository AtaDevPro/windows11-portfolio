import Image from "next/image";

interface DesktopIconProps {
  icon: string;
  label: string;
  className?: string;
  onDoubleClick?: () => void;
}

export default function DesktopIcon({
  icon,
  label,
  className,
  onDoubleClick,
}: DesktopIconProps) {
  return (
    <button
      onDoubleClick={onDoubleClick}
      className="flex flex-col items-center gap-2 w-20 text-white text-xs text-center hover:bg-white/10 rounded-lg p-2 transition"
    >
      <div className="relative w-12 h-12">
        <Image
          src={icon}
          alt={label}
          fill
          className={`object-contain ${className}`}
        />
      </div>
      <span className="px-1 bg-black/50 rounded backdrop-blur-sm">{label}</span>
    </button>
  );
}
