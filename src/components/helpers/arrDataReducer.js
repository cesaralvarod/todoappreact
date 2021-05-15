const arrDataReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        data: [...state.data, action.dataForm],
      };
    case "delete":
      state.data = state.data.filter((task) => action.id !== task.id);
      return {
        data: state.data,
      };
    case "change":
      state.data = state.data.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
      console.log(state.data);
      return {
        data: state.data,
      };
    default:
      throw new Error("Input requires an action type");
  }
};

export default arrDataReducer;
