import React, { useEffect, useReducer } from "react";

// Components

import TasksContent from "./TasksContent";
import FormContent from "./FormContent";

// Reducers

import arrDataReducer from "./helpers/arrDataReducer";

// Styles

import "./Content.css";

const Content = () => {
  const init = () => {
    return (
      JSON.parse(localStorage.getItem("tasks")) || {
        data: [],
      }
    );
  };

  const [arrData, setArrData] = useReducer(arrDataReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(arrData));
  }, [arrData]);

  return (
    <div className="content">
      <TasksContent arrData={arrData} setArrData={setArrData} />
      <FormContent setArrData={setArrData} />
    </div>
  );
};

export default Content;
