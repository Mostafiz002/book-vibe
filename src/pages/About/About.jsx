import React from "react";
import aboutImg from "../../assets/books.jpg";

const About = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-20 px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Book Vibe"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-purple-600">Book Vibe</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Welcome to{" "}
            <span className="font-semibold text-purple-700">Book Vibe</span> —
            your go-to place for discovering, reviewing, and exploring the world
            of books. We connect readers with stories that inspire, entertain,
            and educate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our mission is to build a vibrant reading community where book
            lovers can share their thoughts and find new favorites. Whether you
            love fiction, non-fiction, or biographies, Book Vibe has something
            for every curious mind.
          </p>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Vision / Mission section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Vision & Mission
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          At Book Vibe, we aim to ignite a love for reading across generations.
          Our platform helps you discover meaningful stories, track your reading
          journey, and connect with people who share your passion for books.
        </p>
      </div>
    </section>
  );
};

export default About;
