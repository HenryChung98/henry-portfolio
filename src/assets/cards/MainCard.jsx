import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { MdOutlinePhoneIphone, MdEmail } from "react-icons/md";

function SocialBtn({ icon, link }) {
  return (
    <>
      <li className="m-2 hover:opacity-50 duration-100">
        <a href={link}>
          <span>{icon}</span>
        </a>
      </li>
    </>
  );
}

function ResumeBtn({ link, text }) {
  return (
    <>
      <a
        href={link}
        className=" px-5 rounded hover:opacity-50 duration-100 uppercase font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume({text})
      </a>
    </>
  );
}

export default function MainCard() {
  return (
    <>
      <section
        className={`bg-[#F1F5F9] rounded-lg shadow-xl relative z-20 flex flex-col justify-between items-center w-full md:w-[400px] mb-2 pb-5 h-[500px] md:h-[600px]`}
      >
        <img
          src="maincard-background.webp"
          alt="background-image"
          className="w-full h-1/2 rounded"
        />
        <img
          src="maincard-picture.webp"
          alt="profile-image"
          className="relative bottom-10 rounded-full w-30 h-30"
        />
        <div className="flex flex-col space-y-1 relative bottom-5">
          <h1 className="text-xl uppercase font-bold">Henry Chung</h1>
          <h2 className="text-sm uppercase font-semibold">
            Game developer / Web developer
          </h2>
          <ul className="flex flex-row justify-center items-center">
            <SocialBtn
              link="https://github.com/HenryChung98"
              icon={<IoLogoGithub size={20} />}
            />
            <SocialBtn
              link="https://www.linkedin.com/in/henry-chung-cs/"
              icon={<IoLogoLinkedin size={20} />}
            />
            <SocialBtn
              link="https://www.instagram.com/henryy__98"
              icon={<IoLogoInstagram size={20} />}
            />
            <SocialBtn
              link="mailto:tongsik98@gmail.com"
              icon={<MdEmail size={20} />}
            />
            <SocialBtn
              link="tel:(778)322-3951"
              icon={<MdOutlinePhoneIphone size={20} />}
            />
          </ul>
          <div className="flex border-t pt-5">
            <ResumeBtn link="/Henry_Chung_Resume_GameDev.pdf" text="game" />
            <ResumeBtn link="/Henry_Chung_Resume_WebDev.pdf" text="web" />
          </div>
        </div>
      </section>
    </>
  );
}
