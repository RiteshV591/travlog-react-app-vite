export const Features = () => {
  return (
    <section id="features-section">
      {/* Main container */}
      <div className="container flex flex-col my-10 2xl:gap-20 justify-center items-center text-center lg:text-left mx-auto lg:flex-row">
        {/* Features intro heading */}
        <div className="flex flex-col gap-4 p-6 mx-8 lg:text-left xl:ml-12 2xl:mx-0">
          <h4 className="text-pink-400 text-lg font-semibold 2xl:text-xl">
            WHAT WE SERVE
          </h4>
          <h1 className="text-4xl font-bold text-matt-black leading-snug 2xl:text5">
            Top Values For You
          </h1>
          <p className="paragraph-text">
            {`Embrace life's vastness,`}
            <br />
            venture forth,
          </p>
        </div>

        {/* Feature container */}
        <div className="sm:flex sm:m-4 sm:py-12 lg:pb-0 lg:mb-0">
          {/* Feature - 1 */}
          <div className="flex flex-col items-center gap-5 p-6 mx-8 sm:p-2 sm:mx-2 lg:mx-4 lg:items-start 2xl:mx-8">
            <img
              className="w-24 sm:h-20 md:h-24"
              src="../resources/Features/feature1.svg"
              alt="features"
            />
            <h2 className="text-2xl font-semibold text-matt-black sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
              Lot of choices
            </h2>
            <p className="text-base sm:text-sm md:paragraph-text">
              {`Embrace life's vastness, venture forth,`}
            </p>
          </div>

          {/* Feature - 2 */}
          <div className="flex flex-col items-center gap-4 p-6 mx-8 sm:p-2 sm:mx-2 lg:mx-4 lg:items-start 2xl:mx-8">
            <img
              className="w-24 sm:h-20 md:h-24"
              src="../resources/Features/feature2.svg"
              alt="features"
            />
            <h2 className="text-2xl font-semibold text-matt-black sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
              Best Tour Guide
            </h2>
            <p className="text-base sm:text-sm md:paragraph-text">
              {`Embrace life's vastness, venture forth,`}
            </p>
          </div>

          {/* Feature - 3 */}
          <div className="flex flex-col items-center gap-4 p-6 mx-8 sm:p-2 sm:mx-2 lg:mx-4 lg:items-start 2xl:mx-8">
            <img
              className="w-24 sm:h-20 md:h-24"
              src="../resources/Features/feature3.svg"
              alt="features"
            />
            <h2 className="text-2xl font-semibold text-matt-black sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
              Easy Booking
            </h2>
            <p className="text-base sm:text-sm md:paragraph-text">
              {`Embrace life's vastness, venture forth,`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
