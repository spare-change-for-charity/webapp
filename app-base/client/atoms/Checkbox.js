import React from 'react';

import getCombinedStyles from '/client/lib/getCombinedStyles';
import propTypesHandler, {PropTypes} from '/client/lib/propTypesHandler';
import randomId from '/client/lib/randomId';
import withStyles from '/client/styles/withStyles';

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
      onChange(checkbox.checked, this);
    }
    else {
      this.setState(state => ({checked: ! state.checked}));
    }
  }

  render() {
    const {label, name} = this.props;
    const {checked} = this.state;

    const {css, styles} = this.props;
    const combinedStyles = getCombinedStyles(this.props, styles.checkboxFieldset);

    return (
      <fieldset {...combinedStyles}>
        <input
          checked={checked}
          id={this.id}
          name={name}
          type='checkbox'
          {...css(styles.checkboxInput)}
          onChange={this.onChangeWrapper}
        />
        <label htmlFor={this.id} {...css(styles.checkboxLabel)}>
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
  className: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
}, true);

Checkbox.defaultProps = {
  checked: false,
  className: '',
  style: {},
  onChange: null,
};

Checkbox.styles = ({}) => ({
  checkboxFieldset: {

  },
  checkboxInput: {

  },
  checkboxLabel: {

  },
});

export default withStyles(Checkbox.styles)(Checkbox);
