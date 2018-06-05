import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import randomId from '/client/lib/randomId';
import withStyles from '/client/styles/withStyles';

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
      onChange(input.value, this);
    }
    else {
      this.setState(state => ({value: input.value}));
    }
  }

  render() {
    const {label, name, type} = this.props;
    const {value} = this.state;

    const {css, styles} = this.props;
    const combinedStyles = getCombinedStyles(this.props, styles.inputFieldset);

    return (
      <fieldset {...combinedStyles}>
        <label htmlFor={this.id} {...css(styles.inputLabel)}>
          {label}
        </label>
        <input
          id={this.id}
          name={name}
          type={type}
          value={value}
          {...css(styles.inputArea)}
          autoComplete='off'
          onChange={this.onChangeWrapper}
        />
      </fieldset>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = propTypesHandler({
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}, true);

Input.defaultProps = {
  className: '',
  style: {},
  type: 'text',
  value: '',
  onChange: null,
};

Input.styles = ({}) => ({
  inputFieldset: {

  },
  inputArea: {

  },
  inputLabel: {

  },
});

export default withStyles(Input);
