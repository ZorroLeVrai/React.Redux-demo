import { createSelector } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const selectorFunction = state => {
  //console.log("state.first.a1");
  return state.second.b1;
}

const selectB1Value = createSelector(
  [selectorFunction],
  val => {
    console.log("First Selection Function (a1)");
    //return val;
    return val.filter(e => e % 2 == 1);
  }
);

const DisplaySecondData = () => {
  const b1Value = useSelector(selectB1Value);

  const refreshCounter = useRef(1);
  useEffect(() => { refreshCounter.current += 1; });

  return (
    <div>
      DisplaySecondData ({refreshCounter.current}) - b1: {b1Value.length}
    </div>
  )
}

export default DisplaySecondData;