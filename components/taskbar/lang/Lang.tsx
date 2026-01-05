import { useLangStore } from "@/lib/LangStore";

function Lang() {
  const { currentLang, toggle } = useLangStore();
  return (
    <div>
      <button
        onClick={toggle}
        className=" flex items-center text-white text-sm justify-center px-6 h-12  rounded-lg transition-all duration-200 cursor-default hover:bg-white/20 group"
      >
        {currentLang}
      </button>
    </div>
  );
}

export default Lang;
