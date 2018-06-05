import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Button = (props) => {
  const {text, type} = props;

  const {styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.button);

  return (
    <button type={type} {...combinedStyles}>
      {text}
    </button>
  );
};

Button.displayName = 'Button';

Button.propTypes = propTypesHandler({
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
}, true);

Button.defaultProps = {
  className: '',
  style: {},
  type: 'submit',
};

Button.styles = ({colors}) => ({
  button: {

  },
});

export default withStyles(Button);