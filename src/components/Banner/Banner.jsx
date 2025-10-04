import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <section className="py-28 ">
      <div className="max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Discover Your Next <span className="text-purple-600">Favorite Book</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Explore thousands of books across all genres — from timeless classics
            to modern masterpieces. Find stories that inspire, teach, and stay
            with you forever.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-transform duration-300 hover:-translate-y-1">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-end">
          <img
            src={bannerImg}
            alt="Books"
            className="w-[340px] sm:w-[420px] lg:w-[500px] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
