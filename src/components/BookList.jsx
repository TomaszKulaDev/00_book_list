import React from 'react';
import Book from "./Book";
import {firstBook, secondBook, threeBook } from "../dataFirst";

const BookList = ()=> {
    return (
        <section className='booklist'>
            <Book {...firstBook}>
                <p>This prop children is special props dont forget it!</p>
                <button>Click me</button>
            </Book>

            <Book {...secondBook} />
            <Book {...threeBook} />

        </section>
    );

}

export default BookList;
