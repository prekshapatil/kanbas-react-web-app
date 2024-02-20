import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript/";
import Styles from "./Styles";
import Add from "./add";
import Classes from "./classes";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";


function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList />
      <TodoItem/>
      <Add a={3} b={4} />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
}
export default Assignment3;