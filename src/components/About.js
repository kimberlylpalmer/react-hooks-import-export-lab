import React from "react";

const image =
  "https://rockykanaka.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-15-at-2.07.05-PM-1180x880.png";
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
