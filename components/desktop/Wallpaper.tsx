import Image from "next/image";
import winDsrkImage from "@/public/wallpaper/1dark.jpg";

function Wallpaper() {
  return (
    <div>
      <Image
        src={winDsrkImage}
        fill
        alt="Windows 11 dark mode wallpaper"
        className="object-cover"
        priority
        quality={100}
        sizes="100vw"
        unoptimized={true}
        placeholder="blur"
        blurDataURL={winDsrkImage.blurDataURL}
      />
    </div>
  );
}

export default Wallpaper;
