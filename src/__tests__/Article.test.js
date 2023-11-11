import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview }) => {

  const minutesToRead = Math.ceil(preview.split(' ').length / 200); 

  const renderReadingTime = () => {
    const emojis = minutesToRead <= 30
      ? '☕️'.repeat(Math.ceil(minutesToRead / 5))
      : '🍱'.repeat(Math.ceil(minutesToRead / 10));

    return `${emojis} ${minutesToRead} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {renderReadingTime()}
    </article>
  );
};

export default Article;

