import SignIn from './SignIn';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

test('given empty GroceryShoppingList, user can add an item to it', () => {
  const { getByPlaceholderText, getByText, getAllByText } = render(<SignIn />);

  fireEvent.changeText(getByPlaceholderText('Enter grocery item'), 'banana');
  fireEvent.press(getByText('Add the item to list'));

  const bananaElements = getAllByText('banana');
  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
