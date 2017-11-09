import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';

class Form extends React.Component {
  onSubmitWrapper = (event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = Array.from(form.elements).reduce((object, input) => (
      input.name ? {...object, [input.name]: input.value} : object
    ), {});
    this.props.onSubmit(formObject);
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
