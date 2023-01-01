import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";

export const TodoListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const TodoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  width: 80%;
  justify-content: flex-start;
  margin: 15px;
  font-size: 20px;
  color: ${({ toggleComplete }) => (toggleComplete ? "#CDCDCD" : "#000")};
  text-decoration: ${({ toggleComplete }) =>
    toggleComplete ? "line-through" : "none"};

  & .Todo-icon {
    padding-right: 20px;
    border: none;
  }
`;

export const Todobtn = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const TodoListLi = styled.li`
  list-style: none;
  width: 80%;
`;

export const TodoCompleteBtn = styled.button`
  font-size: 14px;
  padding: 10px;
  border-radius: 50px;
  background: grey;
`;

export const DeleteBtn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 80%;
`;
export const DeleteIcon = styled(AiFillDelete)`
  cursor: pointer;
  color: #000;
`;
export const UnCompletedIcon = styled(BsCircleFill)`
  cursor: pointer;
  display: ${({ toggleComplete }) => (toggleComplete ? "none" : "block")};
  color: #afafaf;
`;
export const CompletedIcon = styled(FcApproval)`
  cursor: pointer;
  display: ${({ toggleComplete }) => (toggleComplete ? "block" : "none")};
`;
