import { useState } from "react";

function SkillIcons({ iconPath, iconAlt }) {
  const [rotateDegree, setRotateDegree] = useState("");
  const handleHover = () => {
    const randomRotate = Math.random() > 0.5 ? "hover:-rotate-45" : "hover:rotate-45";
    setRotateDegree(randomRotate);
  };

  return (
    <>
      <img
        src={iconPath}
        alt={iconAlt}
        onMouseEnter={handleHover}
        className={`w-1/3 md:w-1/5 p-3 md:p-6 ${rotateDegree} hover:drop-shadow-lg transition-transform duration-300`}
      />
    </>
  );
}

export default function SkillsCard() {
  return (
    <>
      <h1 className="text-xl mb-4 text-indigo-600 border-b">
        Programing Languages
      </h1>
      <div className="flex flex-wrap items-center">
        <SkillIcons iconPath="Icons/c-icon.webp" iconAlt="c" />
        <SkillIcons iconPath="Icons/cpp-icon.webp" iconAlt="cpp" />
        <SkillIcons iconPath="Icons/cs-icon.webp" iconAlt="cs" />
        <SkillIcons iconPath="Icons/python-icon.webp" iconAlt="python" />
        <SkillIcons iconPath="Icons/js-icon.webp" iconAlt="js" />
        <SkillIcons iconPath="Icons/ts-icon.webp" iconAlt="ts" />
        <SkillIcons iconPath="Icons/php-icon.webp" iconAlt="php" />
      </div>
      <h1 className="text-xl mb-4 text-indigo-600 border-b">
        Libraries / Frameworks
      </h1>
      <div className="flex flex-wrap">
        <SkillIcons iconPath="Icons/express-icon.webp" iconAlt="express" />
        <SkillIcons iconPath="Icons/threejs-icon.webp" iconAlt="threejs" />
        <SkillIcons iconPath="Icons/react-icon.webp" iconAlt="react" />
        <SkillIcons iconPath="Icons/nextjs-icon.webp" iconAlt="nextjs" />
        <SkillIcons iconPath="Icons/django-icon.webp" iconAlt="django" />
        <SkillIcons iconPath="Icons/tailwind-css-icon.webp" iconAlt="tailwind" />
        <SkillIcons iconPath="Icons/socket-io-icon.webp" iconAlt="socket-io" />
      </div>

      <h1 className="text-xl mb-4 text-indigo-600 border-b">Engines / etc</h1>
      <div className="flex flex-wrap">
        <SkillIcons
          iconPath="Icons/unreal-engine-icon.webp"
          iconAlt="unreal-engine"
        />
        <SkillIcons
          iconPath="Icons/unity-game-engine-icon.webp"
          iconAlt="unity-engine"
        />
        <SkillIcons
          iconPath="Icons/adobe-premiere-pro-icon.webp"
          iconAlt="adobe-premiere-pro"
        />
      </div>
    </>
  );
}
