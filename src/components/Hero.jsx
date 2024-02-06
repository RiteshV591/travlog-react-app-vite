export const Hero = () => {
  return (
    <section id="hero-section" className="relative">
      {/* Main container having content and image */}
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-4 2xl:py-12 lg:flex-row 2xl:justify-between gap-3 xl:gap-0">
        {/* Content section */}
        <div className="flex flex-col justify-center items-center p-6 2xl:pl-0 text-center md:px-10 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl lg:text-left lg:items-start">
          <button className="w-56 py-3 px-6 mb-8 flex 2xl:text-xl 2xl:w-64 justify-between items-center drop-shadow-md bg-white rounded-full text-pink-500 font-semibold hover:bg-white hover:drop-shadow-xl active:drop-shadow-lg">
            Explore the world!
            <img src="../resources/pink-bag.svg" alt="Explore-bag" />
          </button>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl 2xl:text-8xl 2xl:mt-4 2xl:leading-[1.1] ">
            Travel
            <span className="text-pink-400">top destination</span>
            of the world
          </h1>
          <p className="text-slate-600 text-sm my-7 sm:w-96 2xl:w-3/4 sm:text-base md:text-lg ">
            Where adventure meets comfort. We create unforgettable travel
            experiences
          </p>
          <div className="flex items-start gap-3">
            <button className="transition-all py-3 px-3 text-sm lg:py-4 lg:px-5 2xl:px-7 lg:text-lg bg-indigo-700 drop-shadow-2xl text-white font-semibold rounded-full hover:bg-indigo-500 active:bg-indigo-800 active:drop-shadow-xl">
              Get Started
            </button>
            <button className="transition-all flex py-3 px-3 text-sm lg:py-4 lg:px-5 2xl:px-7 lg:text-lg rounded-full border border-slate-300 font-semibold hover:shadow-lg active:shadow-sm active:bg-slate-100 ">
              <img
                className="mr-1 h-5 lg:h-auto"
                src="../resources/play-btn-violet.svg"
                alt="play-btn"
              />
              Watch Demo
            </button>
          </div>
        </div>

        {/* header Image section */}
        <div className="flex items-center justify-center p-6 mt-6 h-auto lg:mt-0 lg:h-[500px] lg:w-[600px] lg:p-0 xl:h-[550px]">
          {/* <a
            href="#"
            className="absolute flex bg-white py-3 px-6 rounded-full shadow-xl active:shadow-lg text-sm bottom-40 ml-6"
            ><img
              className="pr-2"
              src="../resources/location.svg"
              alt="location-logo"
            />Top Places</a
          >
          <a
            href="#"
            className="absolute flex bg-white py-3 px-6 rounded-full shadow-xl active:shadow-lg text-sm bottom-24 right-56"
            ><img
              className="pr-2"
              src="../resources/location.svg"
              alt="location-logo"
            />Top Hotels</a
          >
          <a
            href="#"
            className="absolute flex flex-col bg-white py-3 px-6 text-xs rounded-lg shadow-xl active:shadow-lg right-36 bottom-80"
            ><div className="flex">
              <img
                className="pr-2"
                src="../resources/network.svg"
                alt="location-logo"
              />
              <span className="text-indigo-600 font-bold text-xl">5000+</span>
            </div>
            Customers</a
          > */}
          <img
            className="w-auto sm:w-[500px] md:w-[600px] lg:max-w-none lg:w-[520px] xl:w-[600px] 2xl:h-[650px] 2xl:w-auto 2xl:mt-16 lg:h-[650px]"
            src="../resources/hero.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
