import React, { useReducer } from "react";

// Components

import TasksContent from "./TasksContent";
import FormContent from "./FormContent";

// Styles

import "./Content.css";

const Content = () => {
  console.log("cargado");

  let initialArrData = { data: [], total: 0 };

  const arrDataReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          data: [...state.data, action.dataForm],
          total: state.total + 1,
        };
      default:
        throw new Error("Input requires an action type");
    }
  };

  const [arrData, setArrData] = useReducer(arrDataReducer, initialArrData);

  return (
    <div className="content">
      <TasksContent arrData={arrData} />
      <FormContent setArrData={setArrData} />
    </div>
  );
};

export default Content;
