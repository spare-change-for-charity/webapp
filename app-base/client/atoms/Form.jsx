import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';

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
    const {children} = this.props;

    return (
      <form onSubmit={this.onSubmitWrapper}>
        {children}
      </form>
    );
  }
}

Form.displayName = 'Form';

Form.propTypes = propTypesHandler({
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
});
window.farm = Form;
export default Form;
