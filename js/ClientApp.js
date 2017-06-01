import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import App from './App';

render(
  (<BrowserRouter><App /></BrowserRouter>),
  document.getElementById('app')
);

// http://akamai.redystream.com/PHpDbTKhHUXgwOd0gscCq50PyhuOS77CQ7qSaXKw2mf4yVoDLGR7X3GajD5kriquSbQLMBQvOUEacfMm0fGy01RQrCiyeCuwYS/index.m3u8
