import React from "react";

function Wrapper(props) {
  return <div className="wrapper container">{props.children}</div>;
}

export default Wrapper;
