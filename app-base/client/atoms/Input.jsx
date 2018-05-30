import React from 'react';

import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import randomId from '/client/lib/randomId';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.id = randomId(props.name);
    this.state = {value: props.value};
  }

  onChangeWrapper = (event) => {
    const input = event.target;

    const {onChange} = this.props;
    if (onChange) {
      onChange(input.value);
    }
    else {
      this.setState(state => ({value: input.value}));
    }
  }

  render() {
    const {className, label, name, type} = this.props;
    const {value} = this.state;

    return (
      <fieldset className={className}>
        <input
          name={name}
          value={value}
          id={this.id}
          type={type}

          autoComplete='off'
          onChange={this.onChangeWrapper}
        />
        <label htmlFor={this.id}>
          {label}
        </label>
      </fieldset>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = propTypesHandler({
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
});

Input.defaultProps = {
  className: '',
  type: 'text',
  value: '',
  onChange: null,
};

export default Input;
