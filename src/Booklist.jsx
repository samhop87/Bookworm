import React from "react";
import Book from "./Book";

const Booklist = props => {
  const results = props.data; // THIS IS THE STATE WE'VE PASSED DOWN.
  let books = results.map((book, i) => <Book url={book} key={i} />);

  // this passes it the url of each object
  return <ul className="book-list">{books}</ul>;
};

export default Booklist;
