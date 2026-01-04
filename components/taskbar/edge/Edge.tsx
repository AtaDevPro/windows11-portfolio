import { useEdgeStore } from "@/lib/edgeStore";
import TaskbarIcon from "../TaskbarIcon";

function Edge() {
  const { toggle, isOpen } = useEdgeStore();
  return (
    <div>
      <TaskbarIcon
        icon="/icons/taskbar/edge.png"
        label="Microsoft Edge"
        onClick={toggle}
        isActive={isOpen}
      />
    </div>
  );
}

export default Edge;
