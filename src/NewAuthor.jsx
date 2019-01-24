import React from "react";

const NewAuthor = props => {
  //   let bookkey = props.url.elements[8].elements[0].elements[0].text;
  // let author = props.author.author[0];
  // console.log(author);

  //   author["0"].elements["0"].elements[1].elements
  // [""0""][6].elements[""0""]
  return (
    <React.Fragment>
      <li className="spotlight">
        <p className="spot-sub">Welcome to Spotlight!</p>
        <p className="spot-sub-sub">
          Email us at wormy@bkwrm.org to recommend new books for the Bookworm to
          critique here.
        </p>
        <img src={require("./bookworm.png")} alt="spotlight worm" />

        {/* <img href="" src={bookimg} key={bookkey} alt="book pic" />  */}
      </li>
    </React.Fragment>
  );
};

export default NewAuthor;
