import * as React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store";
import "whatwg-fetch";

export const wrapRootElement = ({ element }) =>
    <Provider store={store} >
      {element}
    </Provider>;
