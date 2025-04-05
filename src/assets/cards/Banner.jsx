export default function Banner() {
  return (
    <>
      <h1 className="text-xl mb-4 text-indigo-500">welcome</h1>
      {/* <img src="auctionBanner.webp" alt="" className="w-full h-auto"/> */}
      <a
        className="hidden md:block text-xl uppercase"
        href="https://henry-chung-3d-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View 3D Portfolio
      </a>
    </>
  );
}
