// when convert to gif
// size: original(up to 600px)
// frame rate(FPS): 20(max 15 seconds)
// method: FFMPEG
import { useState } from "react";

import GameProjects from "../components/Projects/GameProjects";
import WebProjects from "../components/Projects/WebProjects";
import EtcProjects from "../components/Projects/EtcProjects";

export default function ProjectsCard() {
  const [isSelected, setIsSelected] = useState("game");
  const handleClick = (selected) => {
    setIsSelected(selected);
  };

  return (
    <>
      <div className="border-b text-indigo-500 flex items-center justify-between">
        <h1 className="text-xl">Projects</h1>
        <ul className="flex ml-4 text-indigo-500">
          <li className="inline-block pr-4">
            <button
              className={`${isSelected == "game" && "opacity-50"} duration-100`}
              onClick={() => handleClick("game")}
            >
              Game
            </button>
          </li>
          <li className="inline-block pr-4">
            <button
              className={`${isSelected == "web" && "opacity-50"} duration-100`}
              onClick={() => handleClick("web")}
            >
              Web
            </button>
          </li>
          <li className="inline-block pr-4">
            <button
              className={`${isSelected == "etc" && "opacity-50"} duration-100`}
              onClick={() => handleClick("etc")}
            >
              Etc
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        {isSelected == "game" && (
          <>
            <GameProjects />
          </>
        )}
        {isSelected == "web" && (
          <>
            <WebProjects />
          </>
        )}
        {isSelected == "etc" && (
          <>
            <EtcProjects />
          </>
        )}
      </div>
    </>
  );
}
