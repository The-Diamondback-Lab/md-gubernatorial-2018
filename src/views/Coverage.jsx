// react
import * as React from 'react';

// data
import stories from '../config/stories.json';

// components
import Story from '../components/Story.jsx';

const Coverage = () => {
  return (
    <div id="coverage">
      <div className="coverage-header">
        <div className="wrapper">
          <h2 className="coverage-heading">
            The Diamondback's Coverage of the Democrats' Race to the Nomination
          </h2>
          <p className="coverage-description">
            Eight Democratic hopefuls will be on the ballot this Election Day,
            vying for their party’s nomination to take on incumbent Republican
            Gov. Larry Hogan in November. Since campaigning began in earnest
            last year, four candidates have visited the University of Maryland.
            Read on for the Diamondback’s coverage of their visits, candidate
            forums in the region, and their stances on the issues you care
            about.
          </p>
        </div>
      </div>
      <div className="stories">
        {stories.map((story, i) => <Story key={'story-' + i} {...story} />)}
      </div>
    </div>
  );
};

export default Coverage;
