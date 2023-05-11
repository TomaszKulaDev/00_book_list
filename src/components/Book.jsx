import React from 'react';

const Book = ({author, image, title, children}) => {

    return (
        <article className='book'>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{author} </h4>
            {children}
        </article>
    );
}

export default Book;
