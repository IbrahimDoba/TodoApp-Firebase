// export const REDUCER_STATE = {
//     ADD_TODO: "add-todo",
//     TOGGLE_TODO : 'toggle-todo',
//     NEW_USER : 'new-user',
//   };


   // const newTodo = (TodoText, email) => {
  //   return {
  //     id: Date.now(),
  //     TodoText: TodoText,
  //     completed: false,
  //     email: email,
  //   };
  // };
  // const reducer = (todos, action) => {
  //   switch (action.type) {
  //     case REDUCER_STATE.ADD_TODO:
  //       return [
  //         ...todos,
  //         newTodo(action.payload.TodoText, action.payload.email),
  //       ];
  //     case REDUCER_STATE.TOGGLE_TODO:
  //       return Usertodos.map((Usertodo) => {
  //         if (Usertodo.id === action.payload.id) {
  //           return {
  //             ...Usertodo,
  //             id: Usertodo.id,
  //             completed: !Usertodo.completed,
  //           };
  //         }
  //         return { ...Usertodo };
  //       });
  //     default:
  //       return todos;
  //   }
  // };

  // const [todos, dispatch] = useReducer(reducer, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: REDUCER_STATE.ADD_TODO,
  //     payload: { TodoText: TodoText, email: email },
  //   });
  //   console.log(todos);
  //   createUser();
  //   SetTodoText("");
  // };