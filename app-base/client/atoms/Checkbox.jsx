import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import randomId from '/client/lib/randomId';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.id = randomId(props.name);
    this.state = {checked: props.checked};
  }

  onChangeWrapper = (event) => {
    const checkbox = event.target;

    const {onChange} = this.props;
    if (onChange) {
      onChange(checkbox.checked);
    }
    else {
      this.setState(state => ({checked: ! state.checked}));
    }
  }

  render() {
    const {label, name} = this.props;
    const {checked} = this.state;

    return (
      <fieldset>
        <input
          name={name}
          checked={checked}
          id={this.id}
          type="checkbox"
          onChange={this.onChangeWrapper}
        />
        <label htmlFor={this.id}>
          {label}
        </label>
      </fieldset>
    );
  }
}

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = propTypesHandler({
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
});

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
};

export default Checkbox;
