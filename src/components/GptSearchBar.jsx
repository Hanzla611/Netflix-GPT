import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const language = useSelector((store) => store.config.lang);
  console.log(language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={
            language === "en"
              ? lang.en.gptSearchPlaceholder
              : language === "hindi"
              ? lang.hindi.gptSearchPlaceholder
              : lang.spanish.gptSearchPlaceholder
          }
        />
        <button className="py-2 col-span-3 m-4 px-4 bg-red-700 text-white rounded-lg font-bold text-xl">
          {language === "en"
            ? lang.en.search
            : language === "hindi"
            ? lang.hindi.search
            : lang.spanish.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
