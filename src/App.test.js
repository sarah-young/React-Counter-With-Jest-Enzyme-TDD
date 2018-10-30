import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

/**
*Factory function to create a ShallowWrapper for the App Component
* @function setup
* @param {object} props - Component props sepcific to this setup.
* @param {object} - Initial state for setup.
* @returns {ShallowWrapper}
*/

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

/**
*Factory function to create a ShallowWrapper for the App Component
* @param {ShallowWrapper}
* @param {string} val - Value of data-test attribute for seach
* @returns {ShallowWrapper}
*/

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts @ zero', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () =>{
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');

  // Find button and click
  button.simulate('click');
  wrapper.update();
  //Find display and test
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test ('clicking button decrements counter display', () => {
  const counter = 7; //Set counter variable
  const wrapper = setup(null, { counter }); // Construct wrapper using setup(props, state);
  const button = findByTestAttr(wrapper, 'decrement-button');

  //Find button & click
  button.simulate('click');
  wrapper.update();
  //Find display and test
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter-1);
});

test ('counter does not go below zero', () => {
  const counter = 0; // set counter variable
  const wrapper = setup(null, {counter}); // construct wrapper using setup (props, state);
  const button = findByTestAttr(wrapper, 'decrement-button');
  //Find button & click
  button.simulate('click');
  wrapper.update();
  //find display and test
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter);
});
