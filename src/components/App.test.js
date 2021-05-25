import React from 'react';
import {render, fireEvent, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('to display correct message after click', async () => {
  let { findByTestId, getByText } = render(<App />)
  let button = await findByTestId('main-btn')
  fireEvent.click(button)
  // let messageElem = await waitFor( () => screen.getByTestId('message'))
  await (waitFor)( async () => {
    let messageElem = await findByTestId('message')
    let expectedMessage = "Hey there! Welcome to Dubeayi's Page!!! Feel free to look around!!!"
    // expect(getByText(expectedMessage)).toBeInTheDocument()
    expect(messageElem).toHaveTextContent(expectedMessage)
  })
})
