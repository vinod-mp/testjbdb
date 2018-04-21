import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobsSchedulerApp from './JobsSchedulerApp';
import JobEntryComp from './components/jobentrycomponent/jobentrycomp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<JobsSchedulerApp />, document.getElementById('jobsscheduler-app'));
ReactDOM.render(<JobEntryComp />, document.getElementById('jobentry-container'));

registerServiceWorker();
