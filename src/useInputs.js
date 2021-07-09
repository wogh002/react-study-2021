import { useState, useReducer, useCallback } from "react";
function reducer(prevState, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...prevState,
        [action.name]: action.value,
      };
    case "RESET_INPUT":
      return {
        ...action.initalForm,
      };
    default:
      return prevState;
  }
}
// function useInputs(initalForm) {
//   const [form, setForm] = useState(initalForm);
//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setForm((form) => ({ ...form, [name]: value }));
//   }, []);
//   const reset = useCallback(() => setForm(initalForm), [initalForm]);

//   return [form, onChange, reset];
// }

function useInputs(initalForm) {
  const [form, dispatch] = useReducer(reducer, initalForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);
  const reset = useCallback(() => {
    dispatch({
      type: "RESET_INPUT",
      initalForm,
    });
  }, [initalForm]);
  return [form, onChange, reset];
}
export default useInputs;
