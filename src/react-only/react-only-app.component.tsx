import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedReactComponent } from './connected-react-component';
import { ReactOnlyLog } from './react-only-log.component';
import { store } from './redux-store'

export const ReactOnlyApp = () => {
  return (
    <Provider store={store}>
      <h1>React-only app</h1>
      <p>Store has three properties: var1, var2, and var3.  Only var1 is connected to this component, so only changes to var1 trigger a re-render of the component.</p>
      <ConnectedReactComponent/>
      <ReactOnlyLog/>
    </Provider>
  );
};