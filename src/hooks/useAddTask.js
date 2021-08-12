import { useEffect } from "react";

export const useAddTask = (inputRef, setData) => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendData = (data) => {
    setData({ type: "add", dataForm: data });
  };

  const inputValue = inputRef.current.value.trim();

  return { sendData, inputValue };
};
