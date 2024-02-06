export const Customer = () => {
  return (
    <section id="customer-satisfaction">
      {/* Main container */}
      <div className="container flex flex-col justify-center items-center text-center my-10 mx-auto lg:justify-between md:mx-auto xl:flex-row xl:text-left xl:items-start">
        <img
          className="w-auto p-8 xl:max-w-none xl:w-[760px] 2xl:w-auto 2xl:max-w-full"
          src="../resources/dream-section.svg"
          alt=""
        />
        <div className="flex flex-col gap-4 p-8 xl:gap-8 2xl:my-auto">
          <h4 className="text-pink-400 text-lg font-semibold 2xl:text-2xl">
            WE ARE THE BEST FOR YOU
          </h4>
          <h1 className="text-4xl font-bold text-matt-black leading-snug 2xl:text-5xl 2xl:font-semibold 2xl:leading-snug">
            Unlock Your Dream Destination
          </h1>
          <p className="paragraph-text">
            We are dedicated to making your journey of discovery truly
            unforgettable. Our team of passionate travel experts is here to
            assist you in finding the destination of your dreams.
          </p>
          <div className="flex flex-col gap-4 p-4 sm:flex-wrap sm:flex-row sm:grid sm:grid-flow-col sm:justify-stretch xl:text-center 2xl:px-0 sm sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2 py-6 border rounded-2xl">
                <h2 className="bold-pink-heading">4k +</h2>
                <p className="">Satisfied Customers</p>
              </div>
              <div className="flex flex-col gap-2 py-6 border rounded-2xl">
                <h2 className="bold-pink-heading">1000 +</h2>
                <p className="">Global Destinations</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2 py-6 border rounded-2xl">
                <h2 className="bold-pink-heading">24/7</h2>
                <p className="">Customer Support</p>
              </div>
              <div className="flex flex-col gap-2 py-6 border rounded-2xl">
                <h2 className="bold-pink-heading">100%</h2>
                <p className="">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
