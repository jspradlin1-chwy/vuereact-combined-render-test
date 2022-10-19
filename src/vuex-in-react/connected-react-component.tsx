import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { connectVuex } from 'vuereact-combined';
import { ReactVuexLog } from './react-vuex-log.component';

const log = [];
export const ConnectedReactComponentContainer = ({var1, incrementVar1, incrementVar2, incrementVar3}) => {
  useEffect(() => {
    log.push('rendered react-vuex-component');
  });
  return (
    <div>
      <h2>Connected React Component (react-vuex)</h2>
      <div>var1: {var1}</div>
      <button onClick={incrementVar1}>Increment Var 1</button>
      <button onClick={incrementVar2}>Increment Var 2</button>
      <button onClick={incrementVar3}>Increment Var 3</button>
      <ReactVuexLog log={log}/>
    </div>
  )
}

export const ConnectedReactComponent = connectVuex({
  mapStateToProps:  state => ({var1: state.var1}),
  mapCommitToProps: commit => ({
    incrementVar1: () => commit('incrementVar1'),
    incrementVar2: () => commit('incrementVar2'),
    incrementVar3: () => commit('incrementVar3'),
  })
})(ConnectedReactComponentContainer as any);