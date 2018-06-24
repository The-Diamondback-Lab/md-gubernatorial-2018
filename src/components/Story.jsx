// react
import * as React from 'react';

const Story = props => {
  return (
    <figure className="story">
      <div className="story-text-container">
        <p className="story-date">{props.date}</p>
        <h3 className="story-title">{props.title}</h3>
        {/* <p className="story-author"> {props.author} </p> */}
        <p
          className="story-blurb"
          dangerouslySetInnerHTML={{ __html: props.blurb }}
        />
        <a href={props.link} target="_blank" className="story-link">
          Read More
        </a>
      </div>
      <img
        src={props.image.url}
        alt={props.image.alt}
        className="story-image"
      />
    </figure>
  );
};

export default Story;
