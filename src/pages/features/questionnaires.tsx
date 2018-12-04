import * as React from "react";
import {withLayout} from "../../components/Layout";

const QuestionnairePage = () => {
  return (
    <div>
      <ul>
        <li>Catalogue</li>
        <li>Custom - Scale + Comments</li>
        <li>Question categories</li>
        <li>Instructions</li>
      </ul>
    </div>
  );
};

export default withLayout(QuestionnairePage);
