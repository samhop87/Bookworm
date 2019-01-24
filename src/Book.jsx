import React from "react";

const Book = props => {
  let bookimg = props.url.elements[8].elements[3].elements[0].text;
  let bookkey = props.url.elements[8].elements[0].elements[0].text;
  let booktext = props.url.elements[8].elements[1].elements[0].text;

  let booklink = "https://www.google.com/search?&q=" + booktext;

  return (
    <li className="book-wrap">
      <img href="" src={bookimg} key={bookkey} alt="book pic" />
      <a
        className="booklink"
        href={booklink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {booktext}
      </a>
    </li>
  );
};

export default Book;
