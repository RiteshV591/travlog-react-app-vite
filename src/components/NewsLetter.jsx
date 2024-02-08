import { useState } from "react";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="news-letter-section">
      <div className="container mx-auto my-20 p-4">
        <div className="relative overflow-hidden rounded-lg text-center drop-shadow-2xl">
          <img
            className="hidden xl:block xl:w-full"
            src="../resources/newsLetter/yellow-bg-plane.svg"
            alt=""
          />
          <div className="bg-amber-300 xl:bg-transparent flex flex-col justify-center items-center gap-8 p-6 xl:absolute xl:top-0 xl:bottom-0 xl:right-0 xl:left-0 xl:gap-12">
            <h1 className="text-3xl font-bold text-matt-black leading-snug 2xl:text-5xl 2xl:font-semibold 2xl:leading-snug">
              Sign up to our newsletter
            </h1>
            <p className="paragraph-text max-w-lg text-wrap">
              Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus
              enim facilisi nunc blandit nullam.
            </p>
            <div className="w-full md:w-auto flex bg-white px-4 py-3 rounded-xl">
              <input
                className="w-full md:w-auto focus:outline-none font-medium text-base"
                type="text"
                placeholder="Enter your email address"
                value={email}
                onClick={(e) => e.preventDefault()}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="p-3 rounded-xl bg-indigo-600">
                <img src="../resources/newsLetter/send.svg" alt="send" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
