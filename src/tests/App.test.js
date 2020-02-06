import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  wait
} from '@testing-library/react';
import {FetchMock, fetchMock} from '@react-mock/fetch';
import App from '../App';
import {Provider} from 'react-redux';
import {store} from '../store';
import config from '../config'

// beforeEach(() => {
//   fetchMock.restore();
// });

//afterEach(cleanup);


// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import reducer from './reducers';

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
// );

test('base functionality test', async() => {
  const {
    getByText,
    getByPlaceholderText,
    queryByText,
    container
  } = render(
    <FetchMock
      mocks={[
        {
          //matcher: 'https://k3nluu36pc.execute-api.ap-northeast-1.amazonaws.com/test111',
          matcher: config.apiUrl,
          method: 'GET',
          response: {items: ['hellow','orld']}
        },
      ]}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </FetchMock>
  );

  const appendButton = getByText(/Append/).closest('button');
  const input = container.querySelector('textarea');
  const filterInput = getByPlaceholderText('search text');
  const loadButton = getByText(/Load/).closest('button');
  const storeButton = getByText(/Store/).closest('button');

  //test append button
  expect(queryByText(/panda/)).toBeNull();
  fireEvent.change(input, {target: {value: 'panda'}});
  expect(input.value).toBe('panda');
  expect(appendButton).toBeInTheDocument();
  fireEvent.click(appendButton);
  expect(getByText(/panda/)).toBeInTheDocument();

  //empty text not appending
  const nBefore = container.querySelectorAll('.item').length;
  fireEvent.change(input, {target: {value: ''}})
  fireEvent.click(appendButton);
  const nAfter = container.querySelectorAll('.item').length;
  expect(nAfter).toBe(nBefore);

  //test filter items
  fireEvent.change(input, {target: {value: 'abc'}});
  fireEvent.click(appendButton);
  fireEvent.change(input, {target: {value: 'cde'}});
  fireEvent.click(appendButton);
  expect(queryByText(/abc/)).toBeInTheDocument();
  expect(queryByText(/cde/)).toBeInTheDocument();
  fireEvent.change(filterInput, {target: {value: 'ab'}});
  expect(queryByText(/abc/)).toBeInTheDocument();
  expect(queryByText(/cde/)).toBeNull();

  //test load button
  expect(loadButton).not.toBeDisabled();
  fireEvent.click(loadButton);
  expect(loadButton).toBeDisabled();
  await wait(()=>
    expect(loadButton).not.toBeDisabled()
  );
  expect(getByText(/hellow/)).toBeInTheDocument();
});

test('renders append button', () => {
  const {
    getByText
  } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appendButton = getByText(/Append/).closest('button');
  expect(appendButton).toBeInTheDocument();
});

test('input change when input value change', () => {
  const {
    container
  } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const input = container.querySelector('textarea');

  fireEvent.change(input, { target: { value: 'test value' } });
  expect(input.value).toBe('test value');
});

test('append item on click button', async() => {
  const {
    getByText,
    queryByText,
    container
  } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appendButton = getByText(/Append/).closest('button');
  const input = container.querySelector('textarea');

  expect(queryByText(/panda/)).toBeNull();
  fireEvent.change(input, {target: {value: 'panda'}});
  fireEvent.click(appendButton);
  expect(getByText(/panda/)).toBeInTheDocument()

  // const els = app.container.querySelectorAll('.item');
  // const arr = Array.from(els).map(e=>e.textContent);
  // console.log(arr)
});

test('not append empty item', () => {
  const {
    getByText,
    container
  } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appendButton = getByText(/Append/).closest('button');
  const input = container.querySelector('textarea');

  const nBefore = container.querySelectorAll('.item').length;
  fireEvent.change(input, {target: {value: ''}})
  fireEvent.click(appendButton);
  const nAfter = container.querySelectorAll('.item').length;
  expect(nAfter).toBe(nBefore);
});

test('filter items', () => {
  const {
    getByText,
    queryByText,
    getByPlaceholderText,
    container
  } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const appendButton = getByText(/Append/).closest('button');
  const input = container.querySelector('textarea');
  const filterInput = getByPlaceholderText('search text');

  fireEvent.change(input, {target: {value: 'abc'}});
  fireEvent.click(appendButton);
  fireEvent.change(input, {target: {value: 'cde'}});
  fireEvent.click(appendButton);

  expect(queryByText(/abc/)).toBeInTheDocument();
  expect(queryByText(/cde/)).toBeInTheDocument();
  fireEvent.change(filterInput, {target: {value: 'ab'}});
  expect(queryByText(/abc/)).toBeInTheDocument();
  expect(queryByText(/cde/)).toBeNull();
});

test.skip('fetch mock success', async()=>{
  render(
    <FetchMock
      mocks={[
        {
          matcher: 'https://k3nluu36pc.execute-api.ap-northeast-1.amazonaws.com/test111',
          method: 'GET',
          response: 'test1213'
        },
      ]}
    >
      <div></div>
    </FetchMock>
  );
  const resp = await fetch('https://k3nluu36pc.execute-api.ap-northeast-1.amazonaws.com/test111');
  const txt = await resp.text();
  expect(txt).toBe('test1213');
});

test('items load', async()=>{
  const {
    getByText,
    getByPlaceholderText,
    queryByText,
    container
  } = render(
    <FetchMock
      mocks={[
        {
          matcher: config.apiUrl,
          method: 'GET',
          response: {items: ['hellow','orld']}
        },
      ]}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </FetchMock>
  );

  const appendButton = getByText(/Append/).closest('button');
  const input = container.querySelector('textarea');
  const filterInput = getByPlaceholderText('search text');
  const loadButton = getByText(/Load/).closest('button');

  expect(loadButton).not.toBeDisabled();
  fireEvent.click(loadButton);
  expect(loadButton).toBeDisabled();
  await wait(()=>
    expect(loadButton).not.toBeDisabled()
  );
  expect(queryByText(/hellow/)).toBeInTheDocument();

  // const els = container.querySelectorAll('.item');
  // const arr = Array.from(els).map(e=>e.textContent);
  // console.log('after load',arr);
  // await waitForElement(()=>getByText(/hellow/));
});

test.skip('items saves to server and loads from server', async() => {
  jest.setTimeout(30000);

  const {
    container,
    getByText,
    queryByText
  } = render(      
    <Provider store={store}>
      <App />
    </Provider>
  );

  const input = container.querySelector('textarea');
  const appendButton = getByText(/Append/).closest('button');
  const storeButton = getByText(/Store/).closest('button');
  const loadButton = getByText(/Load/).closest('button');

  fireEvent.change(input, {target: {value: 'test111'}})
  fireEvent.click(appendButton);
  expect(queryByText(/test111/)).toBeInTheDocument();
  
  expect(storeButton).not.toBeDisabled();
  fireEvent.click(storeButton);
  expect(storeButton).toBeDisabled();
  await wait(()=>
    expect(storeButton).not.toBeDisabled()
  );

  fireEvent.change(input, {target: {value: 'test2222'}})
  fireEvent.click(appendButton);
  expect(queryByText(/test222/)).toBeInTheDocument();

  expect(loadButton).not.toBeDisabled();
  fireEvent.click(loadButton);
  expect(loadButton).toBeDisabled();
  await wait(()=>
    expect(loadButton).not.toBeDisabled()
  );

  const els = container.querySelectorAll('.item');
  const arr = Array.from(els).map(e=>e.textContent);
  console.log('after load',arr);

  expect(queryByText(/test111/)).toBeInTheDocument();
  expect(queryByText(/test222/)).toBeNull();
});