import React from "react";
import { useReducer } from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import jwtDecode from "jwt-decode";
import { db } from "../../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";

import {
  TodoBottomDiv,
  TodoWrapper,
  TodoSubmitBtn,
  TodoTopRowTwo,
  TodoLogoutBtn,
  TodoContainer,
  TodoTopDiv,
  TodoInput,
  TodoUsername,
  TodoTopRow,
 
  TodoListContainerLi,
} from "./TodoStyles";
import { IconContext } from "react-icons/lib";
import { REDUCER_STATE } from "../Reducers/FormReducer";

// Todo form using reducer

export const Todo = () => {
  const [TodoText, SetTodoText] = useState("");
  const [user, SetUser] = useState({});
  const [email, SetEmail] = useState();
  const [uniqueUser, setUniqueUser] = useState([]);
  const [Usertodos, SetUserTodos] = useState([]);

  const newTodo = (TodoText, email) => {
    return {
      id: Date.now(),
      TodoText: TodoText,
      completed: false,
      email: email,
    };
  };
  const reducer = (todos, action) => {
    switch (action.type) {
      case REDUCER_STATE.ADD_TODO:
        return [
          ...todos,
          newTodo(action.payload.TodoText, action.payload.email),
        ];
      case REDUCER_STATE.TOGGLE_TODO:
        return Usertodos.map((Usertodo) => {
          if (Usertodo.id === action.payload.id) {
            return {
              ...Usertodo,
              id: Usertodo.id,
              completed: !Usertodo.completed,
            };
          }
          return { ...Usertodo };
        });
      default:
        return todos;
    }
  };

  const [todos, dispatch] = useReducer(reducer, []);

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

  // Todo Google auth

  function handleSignOut(e) {
    SetUser({});
    document.getElementById("Sign-in").hidden = false;
  }

  async function handleCallbackResponse(response) {
    console.log("encoded jwt ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    document.getElementById("Sign-in").hidden = true;
    SetEmail(userObject.email);
    SetUser(userObject);
    await getUser();
  }

 
  const createUser = async (e) => {
    e.preventDefault(e);
    if (TodoText === "") {
      alert("Please enter a valid todo!");
      return;
    }
    await addDoc(collection(db, "User"), {
      id: Date.now(),
      TodoText: TodoText,
      completed: false,
      email: email,
    });
    await getUser()
    SetTodoText('')
    console.log("testingaddtodo");
  };

  const deleteUser = async (id) => {
    console.log("testing del");
    await deleteDoc(doc(db, "User", id));
    await getUser();
  };



  const getUser = async () => {
    const usersCollectionRef = collection(db, "User");
    const data = await getDocs(usersCollectionRef);
    SetUserTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log("getuser test");
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "278289515312-jebmsecssi6m6uvah8t6m1djddfigr9r.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("Sign-in"), {
      theme: "outline",
      size: "large",
    });

    // Todo backend using firebase (Useeffect)

   

    if (Usertodos) {
      const filtered = Usertodos.filter((Usertodo) => {
        return Usertodo.email === email;
      });
      setUniqueUser(filtered);
      console.log("test123", filtered);
    }
  }, [email, user, Usertodos]);

  const toggleComplete = async (Usertodo) => {
    await updateDoc(doc(db, "User", Usertodo.id), {
      completed: !Usertodo.completed,
    });
    console.log("works", toggleComplete);
    getUser();
  };

  // Todo backend using firebase

  return (
    <TodoContainer>
      <TodoWrapper>
        <TodoTopDiv>
          <TodoTopRow>
            <TodoUsername>
              Welcome! {user && <div className="username">{user.name}</div>}{" "}
            </TodoUsername>
           
            <div id="Sign-in"></div>

            {Object.keys(user).length !== 0 && (
              <TodoLogoutBtn
                onClick={(e) => {
                  handleSignOut(e);
                }}
              >
                Sign-Out{" "}
              </TodoLogoutBtn>
            )}
          </TodoTopRow>
          <TodoTopRowTwo>
            <TodoInput>
              <input
                type="text"
                value={TodoText}
                onChange={(e) => SetTodoText(e.target.value)}
                className="Todo-input"
                placeholder="Add a To-Do"
              />
            </TodoInput>
            <TodoSubmitBtn onClick={createUser}>Add To-Do</TodoSubmitBtn>
          </TodoTopRowTwo>
        </TodoTopDiv>
        <TodoBottomDiv>
          <IconContext.Provider value={{ size: "40px" }}>
            <TodoListContainerLi>
              {user.email &&
                uniqueUser.map((Usertodo, id) => {
                  return (
                    <TodoList
                      key={id}
                      Usertodo={Usertodo}
                      toggleComplete={toggleComplete}
                      dispatch={dispatch}
                      deleteUser={deleteUser}
                    />
                  );
                })}
            </TodoListContainerLi>
          </IconContext.Provider>
        </TodoBottomDiv>
      </TodoWrapper>
    </TodoContainer>
  );
};

export default Todo;

