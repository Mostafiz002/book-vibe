import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredDB } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const handleMarkAsRead = (id) => {addToStoredDB(id)};

  return (
    <div className="my-16">
      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          className="w-56 h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          src={singleBook.image}
          alt={singleBook.bookName}
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        {singleBook.bookName}
      </h2>

      {/* Publisher or author */}
      <p className="text-center text-gray-500 text-sm mb-6">
        by{" "}
        <span className="font-medium text-gray-700">
          {singleBook.publisher}
        </span>
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button onClick={()=>{handleMarkAsRead(id)}} className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full shadow-md transition-all duration-300">
          Mark as Read
        </button>
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full shadow-md transition-all duration-300">
          Add To Wishlist
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
