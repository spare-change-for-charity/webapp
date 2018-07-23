import AirbnbPropTypes from 'airbnb-prop-types';
import FacebookPropTypes from 'prop-types';

const propTypesHandler = (propTypes, styled = false) => {
  const stylesPropTypes = {
    css: FacebookPropTypes.func.isRequired,
    styles: FacebookPropTypes.object.isRequired,
    theme: FacebookPropTypes.object.isRequired,
  };

  return AirbnbPropTypes.forbidExtraProps({
    ...propTypes,
    ...(styled && stylesPropTypes),
    meteorPackages: PropTypes.object,
  });
};

const PropTypes = {
  ...AirbnbPropTypes,
  ...FacebookPropTypes,
};

export {PropTypes};
export default propTypesHandler;
