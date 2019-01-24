import React from "react";
import NewAuthor from "./NewAuthor";

const SpotlightAuthor = props => {
  return (
    <React.Fragment>
      <div>
        <NewAuthor author={props.author} />
      </div>
    </React.Fragment>
  );
};

export default SpotlightAuthor;
