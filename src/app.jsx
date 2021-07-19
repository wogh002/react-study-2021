import React from "react";
import CounterContainer from "./containers/counterContainer";
import TodosContainer from "./containers/todosContainer";
const App = () => {
  return (
    <section>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </section>
  );
};

export default App;
