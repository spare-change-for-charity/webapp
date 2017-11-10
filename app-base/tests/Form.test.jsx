import React from 'react';

import Form from '/client/atoms/Form';

test('Form onSubmitWrapper', () => {
  const getData = jest.fn();
  const form = mount(
    <Form onSubmit={getData}>
      <input name="name" defaultValue="value" />
    </Form>
  );
  form.find('form').simulate('submit', {preventDefault: jest.fn()});
  expect(getData).toBeCalledWith({name: 'value'});
});
