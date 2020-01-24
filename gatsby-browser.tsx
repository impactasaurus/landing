import * as React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store";

import "core-js/modules/es6.set";
import "core-js/modules/es6.map";

export const wrapRootElement = ({ element }) =>
    <Provider store={store} >
      {element}
    </Provider>;
