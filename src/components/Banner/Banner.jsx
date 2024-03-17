import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero rounded-2xl overflow-hidden mt-4 py-20"
      style={{
        backgroundImage: "url(" + banner + ")",
      }}
    >
      <div className="bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-20">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Tasty Eats is your go-to online destination for culinary inspiration
            and delicious recipes from around the globe. Whether you are a
            seasoned chef or a kitchen novice, our user-friendly platform offers
            a diverse collection of recipes to suit every taste and occasion.
          </p>
          <div className="space-x-4">
            <button className="btn bg-[#0BE58A] text-[#150B2B] border-none outline-none rounded-full px-6 text-xl font-semibold">
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
