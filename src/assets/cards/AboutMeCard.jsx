import colors from "../components/colorManager";

export default function AboutMeCard() {
  return (
    <>
      <h1 className={`text-xl font-bold mb-4 text-[${colors.sectionTitle}] border-b-2`}>About Me</h1>
      <p className="mb-4">
        Hello! I am currently pursuing Computing Science diploma at Douglas
        College, specializing in game development. I have developed several
        video games using programming languages like C++ and C#, along with
        industry-standard game engines such as Unity and Unreal.
      </p>
      <p className="mb-4">
        My expertise lies in designing immersive game mechanics and building
        intuitive user interfaces. I am constantly driven to innovate and refine
        my skills to contribute meaningfully to the evolving gaming industry.
      </p>
      <p className="mb-4">
        Also, I have a solid understanding of foundational web technologies like
        HTML, CSS, and JavaScript, and have experience with frameworks like
        React and Next.js, using Tailwind CSS for styling. I have worked on
        various projects focusing on efficient coding and enhancing user
        experience, including a real-time chat system using Socket.io. On the
        backend, I have built servers with Node.js and Express, using databases
        like MongoDB and MySQL.
      </p>
    </>
  );
}
