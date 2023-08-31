import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openAI";

function GptSearchBar() {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggests some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example given ahead.Example Result: Transformers, Avatar, Jurrasic Park, Avengers, Hobbits";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
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
        <button
          onClick={handleGptSearchClick}
          className="py-2 col-span-3 m-4 px-4 bg-red-700 text-white rounded-lg font-bold text-xl"
        >
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
