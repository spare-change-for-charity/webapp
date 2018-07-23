import React from 'react';

import Form from '/client/atoms/Form';

test('onSubmitWrapper, 1 value', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name='text' readOnly={true} type='text' value='value' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({text: 'value'});
});

test('onSubmitWrapper, grouped data', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name='address.line1' readOnly={true} type='text' value='l1Value' />
      <input name='address.line2' readOnly={true} type='text' value='l2Value' />
      <input name='address.city' readOnly={true} type='text' value='cityValue' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({address: {line1: 'l1Value', line2: 'l2Value', city: 'cityValue'}});
});

test('onSubmitWrapper, checkboxes with none selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name='checkGroup' readOnly={true} type='checkbox' value='check1' />
      <input name='checkGroup' readOnly={true} type='checkbox' value='check2' />
      <input name='checkGroup' readOnly={true} type='checkbox' value='check3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: false});
});

test('onSubmitWrapper, checkboxes with 1st selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input checked={true} name='checkGroup' readOnly={true} type='checkbox' value='check1' />
      <input name='checkGroup' readOnly={true} type='checkbox' value='check2' />
      <input name='checkGroup' readOnly={true} type='checkbox' value='check3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: 'check1'});
});

test('onSubmitWrapper, checkboxes with 2nd selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name='checkGroup' readOnly={true} type='checkbox' value='check1' />
      <input checked={true} name='checkGroup' readOnly={true} type='checkbox' value='check2' />
      <input name='checkGroup' readOnly={true} type='checkbox' value='check3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: 'check2'});
});

test('onSubmitWrapper, checkboxes with 1st and 2nd selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input checked={true} name='checkGroup' readOnly={true} type='checkbox' value='check1' />
      <input checked={true} name='checkGroup' readOnly={true} type='checkbox' value='check2' />
      <input name='checkGroup' readOnly={true} type='checkbox' value='check3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: ['check1', 'check2']});
});

test('onSubmitWrapper, radio group with none selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name='radioGroup' readOnly={true} type='radio' value='radio1' />
      <input name='radioGroup' readOnly={true} type='radio' value='radio2' />
      <input name='radioGroup' readOnly={true} type='radio' value='radio3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({radioGroup: false});
});

test('onSubmitWrapper, radio group with 1st selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input checked={true} name='radioGroup' readOnly={true} type='radio' value='radio1' />
      <input name='radioGroup' readOnly={true} type='radio' value='radio2' />
      <input name='radioGroup' readOnly={true} type='radio' value='radio3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({radioGroup: 'radio1'});
});

test('onSubmitWrapper, radio group with 2nd selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name='radioGroup' readOnly={true} type='radio' value='radio1' />
      <input checked={true} name='radioGroup' readOnly={true} type='radio' value='radio2' />
      <input name='radioGroup' readOnly={true} type='radio' value='radio3' />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({radioGroup: 'radio2'});
});
