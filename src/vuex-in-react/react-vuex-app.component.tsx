import * as React from 'react';
import { applyVuex } from 'vuereact-combined';
import { ConnectedReactComponent } from './connected-react-component';
import { store } from './vuex-store'

applyVuex(store);

export const ReactVuexApp = () => {
  return (
    <div>
      <>
        <h1>React/Vuex app (using vuereact-combined)</h1>
        <p>Store has three properties: var1, var2, and var3.  Only var1 is connected to this component, but changing any store variable triggers a render, which is incorrect behavior.</p>
        <ConnectedReactComponent/>
      </>
    </div>
  );
};