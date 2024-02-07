export const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="to-top-button"
      title="Go To Top"
      onClick={scrollToTop}
      className=" fixed z-90 bottom-8 right-8 border-0 w-10 h-10 xl:w-16 xl:h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold"
    >
      &uarr;
    </button>
  );
};
