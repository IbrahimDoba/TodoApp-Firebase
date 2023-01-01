import styled from "styled-components";

export const TodoContainer = styled.div`
  background: #abfffa;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoWrapper = styled.div`
  background: #fff;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  width: 100%;
  max-width: 1100px;
  /* border: 3px solid green; */
  border-radius: 20px 20px 0 0;
  flex-basis: 100%;
  box-shadow: 5px 6px #e1e0e0;
`;

export const TodoTopDiv = styled.div`
  background: #287bf6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 35%;
  border-radius: 20px 20px 0 0;

  height: 35%;
  width: 100%;
`;
export const TodoTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  height: 50%;
`;

export const TodoUsername = styled.h3`
  color: #fff;
  font-size: 23px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;

  & .username {
    color: #000;
    margin-left: 10px;
    font-size: 28px;
    text-align: center;
  }
`;
export const TodoLogoutBtn = styled.button`
  background: #fff;
  color: #000;
  border-radius: 50px;
  padding: 12px;
  cursor: pointer;
  font-size: 15px;
`;
export const TodoTopRowTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 20%;
`;
export const TodoListContainerLi = styled.div`
  display: flex;
  width: 85%;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DeleteEditbtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditTodo = styled.button`
  background: #fff;
  color: #000;
  border-radius: 50px;
  padding: 12px;
  cursor: pointer;
  font-size: 15px;
  margin-left: 10px;
`;

export const TodoInput = styled.div`
  width: 75%;
  /* margin: 20px; */

  & .Todo-input {
    background: #fff;
    color: #000;
    width: 80%;
    align-items: center;
    padding: 14px;
    font-size: 17px;
    caret-color: auto;
    outline: none;
    border-radius: 10px;
    border: none;
  }
`;

export const DeleteTodo = styled.p``;
export const TodoSubmitBtn = styled.button`
  background: #fff;
  color: #000;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 15px;
`;

export const TodoBottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #fff;
  flex-basis: 55%;
  height: 65%;
  width: 100%;
  overflow-y: auto;
`;
