import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import withStyles from '/client/styles/withStyles';

class Form extends React.Component {
  onSubmitWrapper = (event) => {
    event.preventDefault();
    const form = event.target;

    const formData =
      Array.from(form.elements)
        .filter(element => element.tagName.toLowerCase() === 'input')
        .reduce((data, input) => {
          const {checked, name, type} = input;
          const value = type === 'checkbox' || type === 'radio' ? checked && input.value : input.value;

          if (! value) {
            return data[name] ? data : {...data, [name]: value};
          }

          const oldValue = data[name];
          if (type === 'checkbox' && oldValue) {
            const arrayedValue = oldValue.constructor === String ? [oldValue, value] : [...oldValue, value];
            return {...data, [name]: arrayedValue};
          }

          return {...data, [name]: value};
        }, {});

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

Form.styles = ({}) => ({
  form: {

  },
});

export default withStyles(Form.styles)(Form);
