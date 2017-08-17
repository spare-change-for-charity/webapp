import {forbidExtraProps} from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

const ContentWrapper = ({content}) => {
  return (
    <div style={style}>
      {content}
    </div>
  );
};

ContentWrapper.displayName = 'ContentWrapper';

ContentWrapper.propTypes = forbidExtraProps({
  content: PropTypes.element.isRequired,
});

const style = {
  position: 'relative',
  padding: '0 2rem',
  maxWidth: '112rem',
  width: '100%',
  margin: '0 auto',
};

export default ContentWrapper;
