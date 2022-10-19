import * as React from 'react';

export const ReactVuexLog = ({log}) => {
  return (
    <div>
      <h3>Render Log:</h3>
      {log.map(logItem => <div>{logItem}</div>)}
    </div>
  );
}