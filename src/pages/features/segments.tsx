import * as React from "react";
import {withLayout} from "../../components/Layout";

const SegmentPage = () => {
  return (
    <div>
      <ul>
        <li>Tags records</li>
        <li>Report based on tags</li>
        <li>Use cases</li>
      </ul>
    </div>
  );
};

export default withLayout(SegmentPage);
