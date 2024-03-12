import React from "react";

import ChartbrewProject from "./ChartbrewProject";
import NotocatProject from "./NotocatProject";
import TranstronProject from "./TranstronProject";

function Project() {
  return (
    <div className="mt-20 pb-20  bg-slate-50">
      <div className="mt-10">
        <ChartbrewProject />
      </div>
      <div className="mt-10">
        <NotocatProject />
      </div>
      <div className="mt-10">
        <TranstronProject />
      </div>
    </div>
  );
}

export default Project;
