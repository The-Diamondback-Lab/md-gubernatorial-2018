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
            Diamondback Coverage of the Maryland Primary Gubernatorials
          </h2>
          <p className="coverage-description">
            Suspendisse fringilla venenatis ante eu cursus. Phasellus at ex
            scelerisque, pharetra lorem sed, hendrerit enim. In ullamcorper
            blandit augue, commodo volutpat massa malesuada in. Phasellus
            posuere egestas sollicitudin. Nulla vel ipsum sit amet massa ornare
            dictum vel viverra neque. Proin vitae tellus est. Etiam vitae erat
            suscipit, efficitur nulla sed, efficitur purus. Suspendisse
            imperdiet hendrerit ligula, ut posuere orci laoreet sit amet. Proin
            cursus eleifend lobortis.
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
