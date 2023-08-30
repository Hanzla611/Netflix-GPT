import { BsFillPlayFill } from "react-icons/bs";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white flex items-center justify-between text-black font-bold text-2xl rounded-lg py-4 px-14 hover:bg-red-500 ">
          <BsFillPlayFill style={{width:"3rem", height:"3rem"}} /> Play
        </button>
        <button className="bg-gray-600 text-white font-bold text-2xl bg-opacity-50 rounded-md mx-3 py-4 px-14  hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
