import React from "react";

const WormBox = props => {
  let search = props.input.searchText;
  if (search === "Horror") {
    return (
      <div className="worm-box">
        <p className="worm-message hor-msg">
          Horror stories to chill your blood...hit submit for a great list.
        </p>
        <img className="worm" src={require("./hworm.png")} alt="horrorworm" />
      </div>
    );
  }

  if (search === "Comedy") {
    return (
      <div className="worm-box">
        <p className="worm-message clwn-msg">
          I'm scared of clowns. I don't like this outfit, so hit submit.
        </p>
        <img
          className="worm"
          src={require("./clownworm.png")}
          alt="clown worm"
        />
      </div>
    );
  }

  if (search === "Non-fiction") {
    return (
      <div className="worm-box">
        <p className="worm-message nonf-msg">
          Time to do some studying! Hit submit for a list of great non-fiction.
        </p>
        <img
          className="worm"
          src={require("./nonficworm.png")}
          alt="non fiction worm"
        />
      </div>
    );
  }

  if (search === "Classics") {
    return (
      <div className="worm-box">
        <p className="worm-message cls-msg">
          I do love a good classic! Submit for a terrific list.
        </p>
        <img
          className="worm"
          src={require("./classicworm.png")}
          alt="classicworm"
        />
      </div>
    );
  }

  if (search === "Adventure") {
    return (
      <div className="worm-box">
        <p className="worm-message adv-msg">
          Are you ready for a thrilling escapade?
        </p>
        <img
          className="worm"
          src={require("./adventureworm.png")}
          alt="adventureworm"
        />
      </div>
    );
  }

  if (search === "Science fiction") {
    return (
      <div className="worm-box">
        <p className="worm-message sci-msg">
          *BZZT* Hit the submit button, human.
        </p>
        <img
          className="worm"
          src={require("./scifiworm.png")}
          alt="scifiworm"
        />
      </div>
    );
  }
  if (search === "Romance") {
    return (
      <div className="worm-box">
        <p className="worm-message rom-msg">Romance is in the air...</p>
        <img
          className="worm"
          src={require("./romanceworm.png")}
          alt="romanceworm"
        />
      </div>
    );
  } else
    return (
      <div className="worm-box">
        <p className="worm-message norm-msg">
          Select an option from the dropdown menu.
        </p>

        <img
          className="worm"
          src={require("./bookworm.png")}
          alt="this is the bookworm"
        />
      </div>
    );
};

export default WormBox;
