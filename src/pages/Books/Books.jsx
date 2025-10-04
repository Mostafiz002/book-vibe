import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div className='mb-24 max-w-[1300px] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            <Suspense fallback={<div>Loading...</div>}>
                {data.map(book=><Book key={book.bookId} book={book}></Book>)}
            </Suspense>
        </div>
    );
};

export default Books;