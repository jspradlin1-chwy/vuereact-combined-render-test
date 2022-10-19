import * as React from 'react';
import { connect } from 'react-redux';

export const ReactOnlyLogContainer = ({reactOnlyLog}) => {
  return (
    <div>
      <h3>Render Log:</h3>
      {reactOnlyLog.map(log => <div>{log}</div>)}
    </div>
  );
}
export const ReactOnlyLog = connect(state => ({reactOnlyLog: state.reactOnlyLog}))(ReactOnlyLogContainer as any);