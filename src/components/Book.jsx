import React, {useState} from 'react';

const Book = ({id, author, image, title, children, getBook, numberOfIndex}) => {

    const [titleClick, setTitleClick] = useState([]);
    const [displayIdBook, setDisplayIdBook] = useState([]);
    console.log(numberOfIndex)

    const displayTitle = () => {
        console.log(titleClick)
        console.log(title)
        setTitleClick(title)
    }
    const displayId = () => {
        getBook(id)
        setDisplayIdBook(id)
    }

    return (
        <article className='book'>
            <span className='number'>
                # {numberOfIndex + 1}
            </span>
            <br/>
            {titleClick}
            <p>This book has ID {displayIdBook}</p>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <br/>
            <h4>{author} </h4>
            {children}
            <br/>
            <button onClick={displayTitle}>Display title</button>
            <br/>
            <button onClick={displayId}>Display ID</button>
        </article>
    );
}

export default Book;
