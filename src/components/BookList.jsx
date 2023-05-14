import React from 'react';
import Book from "./Book";
import {booksData} from "../booksData";
import FormComponent from "./FormComponent";

const BookList = () => {

    const getBook = (id) => {
        const book = booksData.find((book) => book.id === id)
        console.log(book.id)
    }

    return (
        <>
            <section className='centerTitle'>
                <h2>Simply list</h2>
            </section>
            <section className='booklist'>
                <FormComponent/>
                {booksData.map((book, index) => {
                    return (
                        <Book {...book} key={book.id} getBook={getBook} numberOfIndex={index}>
                            <p>This prop children is special props dont forget it!</p>
                            <button>Click me special child button</button>
                        </Book>
                    )
                })}
            </section>
        </>
    );
}

export default BookList;
