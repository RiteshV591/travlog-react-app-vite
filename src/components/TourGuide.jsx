export const TourGuide = () => {
  return (
    <section id="tour-guide-section">
      <div className="container flex flex-col justify-center items-center text-center my-12 mx-auto xl:flex-row xl:text-left xl:my-20">
        <div className="flex flex-col gap-6 p-8 xl:gap-8 2xl:my-auto">
          <h1 className="text-4xl font-bold text-matt-black leading-snug 2xl:text-5xl 2xl:font-semibold 2xl:leading-snug xl:pr-16">
            Meet Our Expert Tour Guides
          </h1>
          <p className="text-base text-slate-400 2xl:text-lg xl:pr-12 2xl:pr-28 md:text-pretty">
            Our journeys are enriched by our team of seasoned tour guides. Our
            guides bring your adventures to life with their expertise, passion
          </p>
          <div className="relative w-auto sm:mx-auto xl:mx-0">
            <img
              className="rounded-3xl drop-shadow-2xl w-auto sm:mx-auto xl:mx-0"
              src="../resources/guide-section/house-image.png"
              alt="house"
            />
            <div className="absolute left-5 top-5 flex bg-black backdrop-blur-sm bg-opacity-10 items-center w-fit px-3 py-2 rounded-full xl:text-xl xl:px-3">
              <img
                className="mr-2"
                src="../resources/location.svg"
                alt="star"
              />
              <p className="text-white font-semibold">Gramado, Brazil</p>
            </div>
            <img
              className="transition-all delay-200 hidden xl:block xl:absolute xl:z-0 xl:-left-10 xl:bottom-11 2xl:z-10 2xl:hover:-z-10"
              src="../resources/guide-section/blobs.svg"
              alt="blob-round"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 p-10 md:flex-row md:gap-2 justify-between xl:flex-col xl:gap-2">
          <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-8 xl:border-b xl:pb-12">
            <img
              className="w-20 sm:h-20 xl:w-auto xl:h-auto"
              src="../resources/guide-section/icon _thumb up.svg"
              alt="thumb-up"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-matt-black xl:text-2xl">
                Expertise
              </h2>
              <p className="text-base leading-relaxed md:text-base text-slate-500 2xl:text-lg 2xl:pr-12">
                Our guides are experts in their fields, ensuring in-depth
                knowledge and insights into every destination.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-8 xl:border-b xl:py-12">
            <img
              className="w-20 sm:h-20 xl:w-auto xl:h-auto"
              src="../resources/guide-section/icon _heart.svg"
              alt="thumb-up"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-matt-black xl:text-2xl">
                Passion
              </h2>
              <p className="text-base leading-relaxed md:text-base text-slate-500 2xl:text-lg 2xl:pr-12">
                They are passionate about travel, culture, and history, making
                your journey engaging and captivating.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-8 xl:pt-12">
            <img
              className="w-20 sm:h-20 xl:w-auto xl:h-auto"
              src="../resources/guide-section/icon _dedication.svg"
              alt="thumb-up"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-matt-black xl:text-2xl">
                Dedication
              </h2>
              <p className="text-base leading-relaxed md:text-base text-slate-500 2xl:text-lg 2xl:pr-12">
                Our guides are dedicated to providing exceptional service and
                ensuring your travel memories are truly unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
