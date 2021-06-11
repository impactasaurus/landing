import * as React from "react";
import Hero from "./index";
import {LayoutProps} from "../Layout";

interface SlantedProps {
  top?: boolean;
  bottom?: boolean;
  children: any;
}

export default ({children, top, bottom}: SlantedProps) => {
  let className = "slanted";
  if (top) {
    className = "top " + className;
  }
  if (bottom) {
    className = "bottom " + className;
  }
  return (
    <div className={className}>
      <Hero>
        {children}
      </Hero>
    </div>
  );
};
