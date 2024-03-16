// import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:p-20">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="space-x-4">
            <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-full px-6 text-xl font-semibold">
              Explore Now
            </button>
            <button className="btn bg-transparent text-white rounded-full px-6 text-xl font-semibold">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
