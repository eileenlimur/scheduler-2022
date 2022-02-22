import React from "react";
import './styles.scss';

export default function Appointment(props) {
  return (
    <article className="appointment">
      {!props.time && "No appointments"}
      {props.time && `Appointment at ${props.time}`}
    </article>
  )
}