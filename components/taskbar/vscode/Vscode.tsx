import { useVscodeStore } from "@/lib/vscodeStore";
import TaskbarIcon from "../TaskbarIcon";

function Vscode() {
  const { toggle, isOpen } = useVscodeStore();
  return (
    <div>
      <TaskbarIcon
        icon="/icons/taskbar/vsCode.ico"
        label="vscode"
        onClick={toggle}
        isActive={isOpen}
      />
    </div>
  );
}

export default Vscode;
