import React from 'react';
import Book from "./Book";
import {booksData} from "../booksData";

const BookList = ()=> {
    return (
        <section className='booklist'>
            {booksData.map((book)=>{
                return (
                    <Book {...book} key={book.id}>
                        <p>This prop children is special props dont forget it!</p>
                        <button>Click me</button>
                    </Book>
                )
            })}
        </section>
    );
}

export default BookList;
