import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../Book/Book";
import { ChevronDown } from "lucide-react";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const storedBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) => storedBooks.includes(book.bookId));
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPage);
      return;
    }
    const sortByRating = [...readList].sort((a, b) => b.rating - a.rating);
    setReadList(sortByRating);
  };

  return (
    <div className="">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift max-w-[1250px] mx-auto my-38">
        <label className="tab">
          <input type="radio" name="my_tabs_4" defaultChecked />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Read Book List
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </div>

        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
          My Wish List
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
        <label className="tab">
          <details className="dropdown -mt-1">
            <summary className="btn bg-transparent capitalize  m-1">
              Sort By {sort ? sort : ""}
              <ChevronDown strokeWidth={1.5} />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a
                  onClick={() => {
                    handleSort("pages");
                  }}
                >
                  pages
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleSort("ratings");
                  }}
                >
                  ratings
                </a>
              </li>
            </ul>
          </details>
        </label>
      </div>
    </div>
  );
};

export default ReadList;
