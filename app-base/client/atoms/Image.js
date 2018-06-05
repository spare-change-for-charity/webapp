import React from 'react';
import ImageLoader from 'react-load-image';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

import LoadingIcon from './LoadingIcon';

const Image = (props) => {
  const {alt, url} = props;

  const {css, styles} = props;
  const combinedStyles = getCombinedStyles(props, styles.loaderWrapper);
  const wrapperProps = {style: combinedStyles.style};

  return (
    <ImageLoader src={url} wrapperProps={wrapperProps} {...combinedStyles}>
      <img {...css(styles.image)} />
      <div {...css(styles.error)}>
        The image failed to load
        {alt && `with alt text: ${alt}`}
      </div>
      <LoadingIcon {...css(styles.loadingIcon)} />
    </ImageLoader>
  );
};

Image.displayName = 'Image';

Image.propTypes = propTypesHandler({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

Image.defaultProps = {
  alt: '',
  className: '',
  style: {},
};

Image.styles = ({}) => ({
  loaderWrapper: {

  },
  image: {

  },
  error: {

  },
  loadingIcon: {

  },
});

export default withStyles(Image);
