import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const Button = (props) => {
  const {
    text, type, url, onClick,
  } = props;

  if (url) {
    const {css, styles} = props;
    const combinedStyles = getCombinedStyles(props, styles.link);

    return (
      <a href={url} role='button' {...combinedStyles}>
        <button type='button' {...css(styles.button)} onClick={onClick}>
          {text}
        </button>
      </a>
    );
  }

  const {styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.button);

  return (
    <button type={type} {...combinedStyles} onClick={onClick}>
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
  url: PropTypes.string,
  onClick: PropTypes.func,
}, true);

Button.defaultProps = {
  className: '',
  style: {},
  type: 'submit',
  url: '',
  onClick: null,
};

Button.styles = () => ({
  button: {

  },
  link: {

  },
});

export default withStyles(Button);
