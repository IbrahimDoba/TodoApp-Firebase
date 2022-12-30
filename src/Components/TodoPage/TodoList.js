import React from "react";
import {
  TodoListLi,
  TodoListContainer,
  DeleteIcon,
  CompletedIcon,
  UnCompletedIcon,
  TodoWrap,
  Todobtn,
  DeleteBtn,
} from "./TodoListStyles";
import { IconContext } from "react-icons/lib";



export const TodoList = ({
  dispatch,
  deleteUser,
  toggleComplete,
  Usertodo,
  todo,
}) => {
  return (
    <>
      <TodoListContainer>
        <IconContext.Provider value={{ size: "40px" }}>
          <TodoWrap toggleComplete={Usertodo.completed}>
            <Todobtn  onClick={() => toggleComplete(Usertodo)} >
              <UnCompletedIcon toggleComplete={Usertodo.completed} />
              <CompletedIcon toggleComplete={Usertodo.completed} />
            </Todobtn>
            <TodoListLi
              toggleComplete={Usertodo.completed}
              className={Usertodo.completed ? "uncomplete-btn" : "complete-btn"}
            >
              {Usertodo.TodoText}
            </TodoListLi>
            <DeleteBtn>
              <DeleteIcon onClick={() => deleteUser(Usertodo.id)} />
            </DeleteBtn>
            
          </TodoWrap>
        </IconContext.Provider>
      </TodoListContainer>
    </>
  );
};

export default TodoList;
