import React from 'react';

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
    const {label, name, type, className, style, css, styles} = this.props;
    const {value} = this.state;

    const {className: innerClassName, style: innerStyle} = css(styles.inputFieldset);

    const combinedClassName = `${className} ${innerClassName}`;
    const combinedStyle = {...innerStyle, ...style};

    return (
      <fieldset className={className}>
        <input
          id={this.id}
          name={name}
          type={type}
          value={value}
          {...css(styles.inputArea)}
          autoComplete='off'
          onChange={this.onChangeWrapper}
        />
        <label htmlFor={this.id} {...css(styles.inputLabel)}>
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
}, true);

Input.defaultProps = {
  className: '',
  type: 'text',
  value: '',
  onChange: null,
};

export default withStyles(({}) => ({
  inputFieldset: {

  },
  inputArea: {

  },
  inputLabel: {

  },
}))(Input);
