import Image from "next/image";
import MyResume from "@/public/MyResume.png";

function Resume() {
  return (
    <div className="h-175 w-full relative overflow-hidden bg-gray-900">
      <Image
        src={MyResume}
        alt="My Resume"
        className="object-contain"
        priority
      />
    </div>
  );
}

export default Resume;
