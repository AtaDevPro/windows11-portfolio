"use client";

import { useSearchStore } from "@/lib/searchStore";
import TaskbarIcon from "../TaskbarIcon";

function Search() {
  const { toggle } = useSearchStore();

  return (
    <div>
      <TaskbarIcon
        icon="/icons/taskbar/searchLight.svg"
        label="Search"
        onClick={toggle}
        className="rotate-y-180"
      />
    </div>
  );
}

export default Search;
