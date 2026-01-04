import TaskbarIcon from "../TaskbarIcon";
import { useGoogleStore } from "@/lib/googleStore";

function Google() {
  const { toggle, isOpen } = useGoogleStore();
  return (
    <div>
      <TaskbarIcon
        icon="/icons/taskbar/google.svg"
        label="Google Chrome"
        onClick={toggle}
        isActive={isOpen}
      />
    </div>
  );
}

export default Google;
