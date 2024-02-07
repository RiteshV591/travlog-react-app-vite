export const SingleCard = ({ item }) => {
  const { id, image, destination, location, price } = item;

  return (
    <div className="destination-card-body" key={id}>
      <img
        className="rounded-3xl drop-shadow-xl w-full"
        src={image}
        alt="destination"
      />
      <div className="destination-card-content">
        <img className="mr-2" src="../resources/Star.svg" alt="star" />
        <p className="text-white font-semibold">5.0</p>
      </div>
      <div className="px-4 flex flex-col gap-3">
        <h1 className="font-bold text-2xl text-matt-black mt-4">
          {destination}
        </h1>
        <p className="text-base text-slate-600">
          Lorem Ipsum is simply dummy text of the printing and...see more
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-slate-600">{location}</p>
            <p className="text-sm text-neutral-400 font-semibold">
              <span className="text-black text-xl 2xl:text-2xl font-bold mr-2">
                ${price}
              </span>
              x 12 interest free
            </p>
          </div>

          <button className="carousel-card-btn">See More</button>
        </div>
      </div>
    </div>
  );
};
