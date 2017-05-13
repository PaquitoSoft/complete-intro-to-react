import React from 'react';
import Search from './Search';
import ShowCard from './ShowCard';
import preload from '../public/data.json';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

test('search snapshot test', () => {
  const component = shallow(<Search />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});

test('search should render a ShowCard for each show', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length)
    .toEqual(preload.shows.length);
});

test('search should render correct amount of shows based on search term', () => {
  const searchTerm = 'house';
  const component = shallow(<Search />);
  component.find('input').simulate('change', {
    target: { value: searchTerm }
  });
  expect(component.find(ShowCard).length).toEqual(2);
});
