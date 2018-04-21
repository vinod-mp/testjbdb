import React from 'react';
import ReactDOM from 'react-dom';
import JobsSchedulerApp from './JobsSchedulerApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobsSchedulerApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
