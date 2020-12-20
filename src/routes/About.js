import React from "react";

function About(props) {
  console.log(props);
  return (
    <div className="jumbotron text-center">
      <span className="lead text-center">
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span className="lead text-center">− George Orwell, 1984</span>
    </div>
  );
}

export default About;
