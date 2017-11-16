import React from 'react';

import Form from '/client/atoms/Form';

test('onSubmitWrapper, 1 value', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="text" defaultValue="value" type="text" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({text: 'value'});
});

test('onSubmitWrapper, checkboxes with none selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="checkGroup" value="check1" type="checkbox" />
      <input name="checkGroup" value="check2" type="checkbox" />
      <input name="checkGroup" value="check3" type="checkbox" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: false});
});

test('onSubmitWrapper, checkboxes with 1st selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="checkGroup" value="check1" type="checkbox" defaultChecked={true} />
      <input name="checkGroup" value="check2" type="checkbox" />
      <input name="checkGroup" value="check3" type="checkbox" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: 'check1'});
});

test('onSubmitWrapper, checkboxes with 2nd selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="checkGroup" value="check1" type="checkbox" />
      <input name="checkGroup" value="check2" type="checkbox" defaultChecked={true} />
      <input name="checkGroup" value="check3" type="checkbox" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: 'check2'});
});

test('onSubmitWrapper, checkboxes with 1st and 2nd selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="checkGroup" value="check1" type="checkbox" defaultChecked={true} />
      <input name="checkGroup" value="check2" type="checkbox" defaultChecked={true} />
      <input name="checkGroup" value="check3" type="checkbox" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({checkGroup: ['check1', 'check2']});
});

test('onSubmitWrapper, radio group with none selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="radioGroup" value="radio1" type="radio" />
      <input name="radioGroup" value="radio2" type="radio" />
      <input name="radioGroup" value="radio3" type="radio" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({radioGroup: false});
});

test('onSubmitWrapper, radio group with 1st selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="radioGroup" value="radio1" type="radio" defaultChecked={true} />
      <input name="radioGroup" value="radio2" type="radio" />
      <input name="radioGroup" value="radio3" type="radio" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({radioGroup: 'radio1'});
});

test('onSubmitWrapper, radio group with 2nd selected', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="radioGroup" value="radio1" type="radio" />
      <input name="radioGroup" value="radio2" type="radio" defaultChecked={true} />
      <input name="radioGroup" value="radio3" type="radio" />
    </Form>
  );
  form.find('form').simulate('submit');
  expect(getData).toBeCalledWith({radioGroup: 'radio2'});
});
