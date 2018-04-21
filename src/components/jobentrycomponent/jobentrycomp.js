import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './jobentrycomp.scss';
class JobEntryComp extends Component {
  /*   getJobEntryId(jobEntryObj) {
        return "Job Entry: #" + jobEntryObj.id;
    }
    const jobEntry = {
        id: "123"
    }
    const jobEntryIdELe = (
        <span class='job-entry-id-ele'> {{getJobEntryId()}} </span>
    ); */
    render() {
        return (
            <div class='job-entry-comp'>
                <div id='jobentry-id-cont'>
                </div>
                My job entry component

            </div>
        );
    }
  /*   ReactDOM.render(
        jobEntryIdELe,
        document.getElementById('jobentry-id-cont');
    ) */
}
export default JobEntryComp
