import Link from "next/link";
import TaskbarIcon from "../TaskbarIcon";

function Copilot() {
  return (
    <Link href="https://copilot.microsoft.com/" target="_blank">
      <TaskbarIcon
        icon="/icons/taskbar/copilot.png"
        label="copilot"
        onClick={() => console.log("copilot")}
      />
    </Link>
  );
}

export default Copilot;
