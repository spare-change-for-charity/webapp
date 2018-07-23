import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

import getFormData from './getFormData';

class Form extends React.Component {
  onSubmitWrapper = (event) => {
    const formData = getFormData(event);
    this.props.onSubmit(formData);
  }

  render() {
    const {styles} = this.props;
    const combinedStyles = getCombinedStyles(this.props, styles.form);

    return (
      <form {...combinedStyles} onSubmit={this.onSubmitWrapper}>
        {this.props.children}
      </form>
    );
  }
}

Form.displayName = 'Form';

Form.propTypes = propTypesHandler({
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}, true);

Form.defaultProps = {
  className: '',
  style: {},
};

Form.styles = () => ({
  form: {

  },
});

export default withStyles(Form);
