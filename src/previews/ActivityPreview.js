import React from 'react';
import './css/default.css';
import { createHTMLString } from '../documentBuilders/digital/activitiesToHtml';
import Map from './components/Map';

// expel to PDF with diff background
// for reading activity, upload "blank" versions with page breaks
// expel whole deal as unit

const determineExercise = (exercise) => {
  let exerciseComponent = <div />;
  switch (exercise._type) {
    case 'interactiveMap':
      exerciseComponent = <Map mapPoints={exercise.mapPoints} />;
      break;
    default:
      exerciseComponent = <div />;
  }
  return exerciseComponent;
};

export function ActivityPreview({ document }) {
  const toPresent = document.draft ?? document.displayed;

  return (
    <div style={{
      font: "1.7rem 'Heinemann School', Helvetica Neue, Helvetica, Arial, sans serif",
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      margin: '0',
    }}
    >
      <div dangerouslySetInnerHTML={{ __html: createHTMLString(toPresent) }} />
      { toPresent.digitalExercises.map(determineExercise) }
    </div>
  );
}
