
import React from 'react';

const About = ({ blogImage = "https://via.placeholder.com/215", aboutText }) => (
  <aside>
    <img src={blogImage} alt="blog logo" />
    <p>{aboutText}</p>
  </aside>
);

export default About;

