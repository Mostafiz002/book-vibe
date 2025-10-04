import React from "react";

const Book = ({ book }) => {
  return (
    <div className="cursor-pointer group transition-transform duration-300 hover:-translate-y-2">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 w-80 sm:w-96 transition-all duration-300">
        {/* Image */}
        <figure className="p-4 bg-gray-50 rounded-xl flex justify-center">
          <img
            className="h-44 object-contain transition-transform duration-300 group-hover:scale-105"
            src={book.image}
            alt={book.bookName}
          />
        </figure>

        {/* Body */}
        <div className="mt-4">
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 bg-purple-50 text-purple-600 rounded-full font-medium hover:bg-purple-100 transition"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title + Year */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {book.bookName}
            </h2>
            <span className="text-xs font-medium bg-purple-600 text-white px-2 py-1 rounded-md">
              {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher */}
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium text-gray-700">Publisher:</span> {book.publisher}
          </p>

          <div className="border-t border-dashed border-gray-300 my-3"></div>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
              {book.category}
            </span>
            <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full font-medium">
              ⭐ {book.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
