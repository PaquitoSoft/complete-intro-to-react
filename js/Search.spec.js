import React from 'react';
import { Provider } from 'react-redux';
import ConnectedSearch, { Search } from './Search';
import ShowCard from './ShowCard';
import preload from '../public/data.json';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import store from './store';
import { setSearchTerm } from './actionCreators';

test('search snapshot test', () => {
  const component = shallow(<Search shows={preload.shows} searchTerm='' />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});

test('search should render a ShowCard for each show', () => {
  const component = shallow(<Search searchTerm='' shows={preload.shows} />);
  expect(component.find(ShowCard).length)
    .toEqual(preload.shows.length);
});

test('search should render correct amount of shows based on search term', () => {
  const searchTerm = 'house';
  // const component = shallow(<Search />);
  // component.find('input').simulate('change', {
  //   target: { value: searchTerm }
  // });
  // expect(component.find(ShowCard).length).toEqual(2);

  store.dispatch(setSearchTerm(searchTerm));
  const component = render(
    <Provider store={store}>
      <ConnectedSearch shows={preload.shows} />
    </Provider>
  );
  expect(component.find('.show-card').length).toEqual(2);
});
