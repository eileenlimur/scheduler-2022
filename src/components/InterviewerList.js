import React from 'react';
import InterviewerListItem from './InterviewerListItem';

import './InterviewerList.scss';

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        selected={interviewer.id === props.value}
        setInterviewer={()=>props.onChange(interviewer.id)}
        avatar={interviewer.avatar}
        name={interviewer.name}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>
  )
}