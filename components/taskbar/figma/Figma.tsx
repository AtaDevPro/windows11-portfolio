import { useFigmaStore } from "@/lib/figmaStore";
import TaskbarIcon from "../TaskbarIcon";

function Figma() {
  const { toggle, isOpen } = useFigmaStore();
  return (
    <div>
      <TaskbarIcon
        icon="/icons/taskbar/figma.png"
        label="Figma"
        onClick={toggle}
        isActive={isOpen}
      />
    </div>
  );
}

export default Figma;
