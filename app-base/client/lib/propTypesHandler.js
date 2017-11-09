import AirbnbPropTypes from 'airbnb-prop-types';
import FacebookPropTypes from 'prop-types';

const propTypesHandler = (propTypes, styled = false) => {
  const stylesPropTypes = {
    styles: FacebookPropTypes.object.isRequired,
    theme: FacebookPropTypes.object.isRequired,
  };

  return AirbnbPropTypes.forbidExtraProps({
    ...propTypes,
    ...(styled && stylesPropTypes),
  });
};

const PropTypes = {
  ...AirbnbPropTypes,
  ...FacebookPropTypes,
};

export {
  PropTypes,
};

export default propTypesHandler;
