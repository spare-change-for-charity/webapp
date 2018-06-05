import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

const main = [];
const external = [];

const Icon = (props) => {
  const {name, size} = props;

  const filename = main.includes(name) ? 'main' : 'external';

  const {styles, theme: {units}} = props;
  const sizeStyle = {height: units(size), width: units(size)};
  const combinedStyles = getCombinedStyles(props, styles.icon, sizeStyle);

  return (
    <svg {...combinedStyles}>
      <use xlinkHref={`/icons/${filename}.svg#${name}`} />
    </svg>
  );
};

Icon.displayName = 'Icon';

Icon.propTypes = propTypesHandler({
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

Icon.defaultProps = {
  size: 1,
  className: '',
  style: {},
};

Icon.usedIcons = {main, external};

Icon.styles = ({colors}) => ({
  icon: {

  },
});

export default withStyles(Icon);
