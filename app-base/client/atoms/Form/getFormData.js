const getGroupedData = inputs => {
  const inputDotGroups = inputs.filter(input => input.name.includes('.'));

  return inputDotGroups.reduce((data, input) => {
    const {name, value} = input;
    const [prefix, key] = name.split('.');

    return {
      ...data,
      [prefix]: {...data[prefix], [key]: value},
    };
  }, {});
};

const getRadioData = inputs => {
  const radioInputs = inputs.filter(input => input.type === 'radio');

  return radioInputs.reduce((data, input) => {
    const {checked, name, value} = input;
    // if value exists, keep it, otherwise set it to false or value if checked
    return data[name] ? data : {...data, [name]: checked && value};
  }, {});
};

const getCheckboxData = inputs => {
  const checkboxInputs = inputs.filter(input => input.type === 'checkbox');

  return checkboxInputs.reduce((data, input) => {
    const {checked, name, value} = input;

    const oldValue = data[name];
    if (checked && oldValue) {
      const arrayedValue = oldValue.constructor === String ? [oldValue, value] : [...oldValue, value];
      return {...data, [name]: arrayedValue};
    }

    return data[name] ? data : {...data, [name]: checked && value};
  }, {});
};

const getTextInputData = inputs => {
  const textInputs = inputs.filter(input =>
    ! (input.name.includes('.') || input.type === 'checkbox' || input.type === 'radio')
  );

  return textInputs.reduce((data, input) => ({...data, [input.name]: input.value}), {});
};

const getFormData = event => {
  event.preventDefault;
  const form = event.target;

  const inputs = Array.from(form.elements).filter(element => element.tagName.toLowerCase() === 'input');

  return {
    ...getGroupedData(inputs),
    ...getRadioData(inputs),
    ...getCheckboxData(inputs),
    ...getTextInputData(inputs),
  };
};

export default getFormData;
