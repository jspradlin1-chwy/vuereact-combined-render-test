import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';

export const ConnectedReactComponentContainer = ({var1, logRender, incrementVar1, incrementVar2, incrementVar3}) => {
  useEffect(() => {
    logRender();
  });
  return (
    <div>
      <h2>Connected React Component (react-redux)</h2>
      <div>var1: {var1}</div>
      <button onClick={incrementVar1}>Increment Var 1</button>
      <button onClick={incrementVar2}>Increment Var 2</button>
      <button onClick={incrementVar3}>Increment Var 3</button>
    </div>
  )
}

export const ConnectedReactComponent = connect(
  state => ({var1: state.var1}),
    dispatch => ({
      logRender: () => dispatch({type: 'APPEND_LOG', payload: 'rendered component'}),
      incrementVar1: () => dispatch({type: 'INCREMENT_VAR_1'}),
      incrementVar2: () => dispatch({type: 'INCREMENT_VAR_2'}),
      incrementVar3: () => dispatch({type: 'INCREMENT_VAR_3'}),
    })
)(ConnectedReactComponentContainer as any);