import arrDataReducer from "../../helpers/arrDataReducer";
import { demoData } from "../fixtures/demoData";

describe("Testing in reducer arrDataReducer", () => {
  test("Reducer arrDataReducer without action.type should return an Error", () => {
    jest.setTimeout(2000);

    try {
      const state = arrDataReducer(demoData, {});

      expect(state).toThrowError();
    } catch ({ message }) {
      console.log(message);
    }
  });

  test("Reducer arrDataReducer should add a task", () => {
    const taskItem = {
      id: Date.now(),
      content: "lorem ipsum",
      done: false,
    };

    const action = {
      type: "add",
      dataForm: taskItem,
    };

    const state = arrDataReducer(demoData, action);

    expect(state.length).not.toBe(demoData.data.length + 1);

    expect(state.data).toEqual([...demoData.data, taskItem]);
  });

  test("Reducer arrDataReducer should delete a task", () => {
    const id = 2;

    const action = {
      type: "delete",
      id,
    };

    const lengthBefore = demoData.data.length;

    const state = arrDataReducer(demoData, action);

    expect(state.data.length).toBe(lengthBefore - 1);
  });

  test("Reducer arrDataReducer should change a task", () => {
    const id = 1;

    const action = {
      type: "change",
      id: 1,
      done: false,
    };

    const state = arrDataReducer(demoData, action);

    expect(state.data[id].done).toBe(action.done);
  });
});
